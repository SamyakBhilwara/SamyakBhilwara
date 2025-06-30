import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bhilwara Computer Hub</title>
        <meta name="description" content="Join Bhilwara Computer Hub - New Batches Starting July 2025" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="container">
        <header className="header">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h1>Bhilwara Computer Hub</h1>
        </header>

        <section className="banner">
          🎉 New Batches Starting July 2025
        </section>

        <section className="about">
          <h2>About Us</h2>
          <p>
            Bhilwara Computer Hub is the most trusted institute in Bhilwara for computer training. 
            We provide high-quality education in programming, designing, accounting and much more.
          </p>
        </section>

        <section className="courses">
          <h2>Our Popular Courses</h2>
          <ul>
            <li>🖥️ Basic Computer Training</li>
            <li>💻 Web Development</li>
            <li>📊 Tally & Accounting</li>
            <li>🎨 Graphic Designing</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>
            📍 First Floor, Plot No. 198, City Kotwali Rd, near Babyhug Showroom,<br />
            Sindhu Nagar, Shastri Nagar, Bhilwara, Rajasthan 311001
          </p>
          <p>📞 <a href="tel:+917413914777">+91 7413914777</a></p>
          <a className="whatsapp" href="https://wa.me/917413914777" target="_blank">📲 WhatsApp Us</a>
        </section>

        <footer className="footer">
          © 2025 Bhilwara Computer Hub. All rights reserved.
        </footer>
      </main>
    </>
  );
}
