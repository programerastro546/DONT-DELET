/*
  # Create PromptFolio Hub Database Schema

  ## New Tables
  
  ### `profiles`
  - `id` (uuid, primary key, references auth.users)
  - `email` (text, unique)
  - `full_name` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### `prompts`
  - `id` (uuid, primary key)
  - `title` (text)
  - `description` (text)
  - `content` (text)
  - `price` (decimal)
  - `category` (text)
  - `tags` (text array)
  - `rating` (decimal)
  - `author_id` (uuid, references profiles)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  - `is_published` (boolean)
  
  ### `purchases`
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `prompt_id` (uuid, references prompts)
  - `amount` (decimal)
  - `purchased_at` (timestamptz)
  - `transaction_id` (text)
  
  ### `reviews`
  - `id` (uuid, primary key)
  - `prompt_id` (uuid, references prompts)
  - `user_id` (uuid, references profiles)
  - `rating` (integer, 1-5)
  - `comment` (text)
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Users can read their own profile
  - Users can update their own profile
  - Everyone can read published prompts
  - Only authenticated users can purchase prompts
  - Users can only read their own purchases
  - Users can create reviews for prompts they purchased
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create prompts table
CREATE TABLE IF NOT EXISTS prompts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  price decimal(10,2) NOT NULL DEFAULT 0.00,
  category text NOT NULL,
  tags text[] DEFAULT ARRAY[]::text[],
  rating decimal(3,2) DEFAULT 0.00,
  author_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_published boolean DEFAULT true
);

ALTER TABLE prompts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published prompts"
  ON prompts FOR SELECT
  TO authenticated
  USING (is_published = true);

CREATE POLICY "Authors can manage own prompts"
  ON prompts FOR ALL
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

-- Create purchases table
CREATE TABLE IF NOT EXISTS purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  prompt_id uuid REFERENCES prompts(id) ON DELETE CASCADE NOT NULL,
  amount decimal(10,2) NOT NULL,
  purchased_at timestamptz DEFAULT now(),
  transaction_id text,
  UNIQUE(user_id, prompt_id)
);

ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own purchases"
  ON purchases FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create purchases"
  ON purchases FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt_id uuid REFERENCES prompts(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(prompt_id, user_id)
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create reviews for purchased prompts"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM purchases
      WHERE purchases.user_id = auth.uid()
      AND purchases.prompt_id = reviews.prompt_id
    )
  );

CREATE POLICY "Users can update own reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own reviews"
  ON reviews FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_prompts_category ON prompts(category);
CREATE INDEX IF NOT EXISTS idx_prompts_author ON prompts(author_id);
CREATE INDEX IF NOT EXISTS idx_purchases_user ON purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_purchases_prompt ON purchases(prompt_id);
CREATE INDEX IF NOT EXISTS idx_reviews_prompt ON reviews(prompt_id);
CREATE INDEX IF NOT EXISTS idx_reviews_user ON reviews(user_id);

-- Insert sample prompts
INSERT INTO prompts (title, description, content, price, category, tags) VALUES
  ('Creative Writing Assistant', 'Professional creative writing prompts for fantasy novels', 'Act as a creative writing assistant. Help me develop characters, plot twists, and engaging dialogue for my fantasy novel. Provide specific examples and techniques for improving narrative flow.', 9.99, 'Writing', ARRAY['creative', 'writing', 'fantasy', 'storytelling']),
  ('Code Review Expert', 'Expert-level code review prompts for software engineers', 'You are an experienced software engineer. Review my code for best practices, performance optimizations, and potential bugs. Explain your suggestions with clear reasoning and examples.', 14.99, 'Programming', ARRAY['programming', 'code-review', 'best-practices', 'optimization']),
  ('Marketing Strategy Generator', 'Comprehensive marketing strategy prompts for startups', 'Create comprehensive marketing strategies for tech startups. Include social media campaigns, content marketing plans, and growth hacking techniques with measurable KPIs.', 19.99, 'Business', ARRAY['marketing', 'strategy', 'startups', 'growth']),
  ('Data Analysis Interpreter', 'Advanced data analysis and visualization prompts', 'Help me understand and interpret complex datasets. Explain statistical concepts, create visualizations, and provide actionable insights from raw data.', 12.99, 'Data Science', ARRAY['data-analysis', 'statistics', 'visualization', 'insights']),
  ('UI/UX Design Consultant', 'Professional UI/UX design feedback prompts', 'Act as a UI/UX design expert. Provide feedback on interface designs, suggest improvements for user experience, and recommend modern design patterns and trends.', 11.99, 'Design', ARRAY['design', 'ui-ux', 'interface', 'user-experience']),
  ('SEO Optimization Specialist', 'Complete SEO audit and optimization prompts', 'Perform comprehensive SEO audits of websites. Provide actionable recommendations for improving search rankings, on-page optimization, and technical SEO fixes.', 16.99, 'Marketing', ARRAY['seo', 'optimization', 'marketing', 'web']),
  ('Financial Planning Advisor', 'Personal finance and investment planning prompts', 'Create personalized financial plans including budgeting, investment strategies, retirement planning, and tax optimization advice tailored to individual situations.', 24.99, 'Finance', ARRAY['finance', 'investment', 'planning', 'budgeting']),
  ('Language Learning Tutor', 'Interactive language learning and practice prompts', 'Act as a language tutor for learning Spanish, French, German, or other languages. Provide structured lessons, practice exercises, and cultural insights.', 8.99, 'Education', ARRAY['language', 'learning', 'education', 'tutoring'])
ON CONFLICT DO NOTHING;
