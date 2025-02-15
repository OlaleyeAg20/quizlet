import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/Button";
import { Guage, Numbers, Topic } from "@/components/Icon";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.heroContainer}>
        <section className={styles.hero}>
          <div>
            <h2>Smarter Quizzes, Better Learning!</h2>
            <p>
              Harness the power of AI to generate personalized quiz questions
              tailored to each student’s learning needs. Engage, assess, 
              and improve with AI-driven quizzes!
            </p>
            <div className={styles.heroButtons}>
              <Link href="/register" className={styles.heroButton}>
                <Button>Register</Button>
              </Link>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </div>
          </div>
          <Image src='/Images/hero.jpg' width={300} height={300} alt="Cartoon reading book" />
        </section>
      </div>
      <section className={styles.steps}>
        <h2>Create your own quiz in just three <br /> easy simple steps</h2>
        <div>
          <section>
            <Topic />
            <p>Enter your topic of interest</p>
          </section>
          <section>
            <Guage />
            <p>Select your level of difficulty</p>
          </section>
          <section>
            <Numbers />
            <p>Enter the number of questions you want</p>
          </section>
        </div>
      </section>
      <section className={styles.about}>
        <h2>About Us</h2>
        <p>
        Welcome to Quizlet, the ultimate AI-powered quiz generator designed to make learning, teaching, and assessment easier than ever! We believe that quizzes are a powerful tool for education, engagement, and knowledge retention. That’s why we leverage artificial intelligence to create dynamic, high-quality quizzes in seconds—saving you time while ensuring accuracy and relevance. Whether you're an educator, student, content creator, or business professional, our AI-driven platform helps you generate quizzes tailored to your needs. From multiple-choice questions to complex problem-solving scenarios, we make quiz creation seamless and efficient.Join us in revolutionizing the way quizzes are made—fast, intelligent, and effortless!Let’s make learning smarter, one question at a time.
        </p>
      </section>
      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <form action="">
          <label>
            <span>Enter your fullname</span>
            <input type="text" placeholder="e.g John Doe" />
          </label>
          <label>
            <span>Enter your email</span>
            <input type="email" placeholder="jondoe@example.com" />
          </label>
          <label>
            <span>Enter your fullname</span>
            <textarea>

            </textarea>
          </label>
          <Button>SUBMIT</Button>
        </form>
      </section>
      <footer>
        <p>&copy; 2025 Astroverse Innovators.</p>
      </footer>
    </div>
  );
}
