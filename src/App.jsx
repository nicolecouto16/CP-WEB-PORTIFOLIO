
import { useState } from 'react'
import './App.css'

function Header() {
  const links = [
    { label: 'Início', href: '#inicio', icon: '⌂' },
    { label: 'Sobre', href: '#sobre', icon: '♙' },
    { label: 'Projetos', href: '#projetos', icon: '▱' },
    { label: 'Habilidades', href: '#habilidades', icon: '◇' },
    { label: 'Contato', href: '#contato', icon: '✉' },
  ]

  return (
    <aside className="sidebar">
      <a href="#inicio" className="sidebar-logo">N.</a>

      <nav className="sidebar-nav" aria-label="Navegação principal">
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className={index === 0 ? 'sidebar-link active' : 'sidebar-link'}
          >
            <span className="sidebar-icon">{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <a href="#projetos" aria-label="Meus projetos">⌘</a>
        <a href="#contato" aria-label="Contato">✉</a>
      </div>
    </aside>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="availability">
          <span className="availability-dot" />
          Disponível para oportunidades
          <span>↗</span>
        </div>

        <p className="eyebrow">OLÁ, EU SOU ESTUDANTE DE TI</p>

        <h1>
          Transformando
          <br />
          ideias em
          <br />
          <span>experiências digitais</span>
        </h1>

        <p className="hero-description">
          Estudante de Engenharia de Software na FIAP, apaixonada
          por tecnologia, design e soluções que geram impacto real.
        </p>

        <div className="hero-buttons">
          <a href="#projetos" className="button button-primary">
            Ver meus projetos →
          </a>

          <a href="#contato" className="button button-secondary">
            Entrar em contato
          </a>
        </div>

        <a href="#sobre" className="scroll-prompt">
          <span>↓</span>
          Role para explorar
        </a>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="planet" />

        <div className="floating-folder">
          <p>📁 meus-projetos/</p>
          <p>📁 sobre-mim/</p>
          <p>📁 habilidades/</p>
          <p>📁 contato/</p>
        </div>

        <div className="profile-glow" />

        <img
          src="/minha-foto.jpg"
          alt="Minha foto de perfil"
          className="hero-portrait"
        />

        <div className="code-cube">
          <span>&lt;/&gt;</span>
        </div>

        <div className="code-window">
          <div className="window-dots">● ● ●</div>
          <code>
            <span>const</span> developer = {'{'}
            <br />
            &nbsp; name: <span>'Estudante FIAP'</span>,
            <br />
            &nbsp; skills: [<span>'React'</span>, <span>'Python'</span>],
            <br />
            &nbsp; passion: <span>'Tecnologia'</span>
            <br />
            {'}'}
          </code>
        </div>

        <div className="floating-stat">
          <span>✦</span>
          <strong>Em evolução</strong>
          <small>Um projeto de cada vez</small>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="section about">
      <p className="section-label">01 — SOBRE MIM</p>
      <h2>Construindo meu caminho na tecnologia.</h2>

      <p className="section-description">
        Sou estudante de Engenharia de Software na FIAP e estou
        desenvolvendo minhas habilidades em programação e criação de
        aplicações. Este portfólio reúne meus estudos, projetos e minha
        evolução como desenvolvedora.
      </p>
    </section>
  )
}

function Skills() {
  const skills = ['Python', 'JavaScript', 'React', 'HTML', 'CSS', 'Git']

  return (
    <section id="habilidades" className="section">
      <p className="section-label">02 — HABILIDADES</p>
      <h2>Tecnologias que estudo.</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <span className="skill-icon">&lt;/&gt;</span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'JOVI Flow',
      description:
        'Uma proposta de solução tecnológica para ajudar estudantes a organizar seus conteúdos de aula.',
      technology: 'Python',
      link: 'https://github.com/',
    },
    {
      title: 'Portfólio Web',
      description:
        'Meu portfólio pessoal desenvolvido para apresentar projetos e praticar desenvolvimento web.',
      technology: 'React',
      link: 'https://github.com/',
    },
    {
      title: 'Projetos de programação',
      description:
        'Exercícios e aplicações desenvolvidos durante minha jornada de aprendizado.',
      technology: 'JavaScript',
      link: 'https://github.com/',
    },
  ]

  return (
    <section id="projetos" className="section">
      <p className="section-label">03 — PROJETOS</p>
      <h2>Projetos em destaque.</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="project-icon">{'{ }'}</span>
              <span className="project-technology">
                {project.technology}
              </span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Ver repositório ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!email.trim() || !email.includes('@')) {
      setStatus('Digite um endereço de e-mail válido.')
      return
    }

    if (message.trim().length < 20) {
      setStatus('A mensagem precisa ter pelo menos 20 caracteres.')
      return
    }

    setStatus(
      'Validação concluída! O envio por e-mail será implementado na próxima etapa.',
    )
  }

  return (
    <section id="contato" className="section contact">
      <p className="section-label">04 — CONTATO</p>
      <h2>Vamos conversar?</h2>

      <p className="section-description">
        Tem alguma oportunidade ou quer conhecer meus projetos? Entre em
        contato.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Seu e-mail</label>
        <input
          id="email"
          type="email"
          placeholder="seuemail@exemplo.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="message">Sua mensagem</label>
        <textarea
          id="message"
          placeholder="Escreva sua mensagem..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          minLength={20}
          required
          rows={5}
        />

        <button type="submit" className="button button-primary">
          Validar mensagem
        </button>

        {status && (
          <p className="form-status" role="status">
            {status}
          </p>
        )}
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Desenvolvido com React e dedicação.</p>
      <a href="#inicio">Voltar ao topo ↑</a>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
