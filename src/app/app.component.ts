import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: 'Full-Stack' | 'Backend' | 'Cloud/DevOps';
  tech: string[];
  description: string;
  githubUrl: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  highlights: string[];
  skills: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class.dark]="isDarkMode" class="min-h-screen bg-slate-900 text-slate-100 font-sans transition-colors duration-300">
      
      <!-- Top Navigation -->
      <nav class="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <a href="#" class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Ranjan Khatiwada
        </a>
        <div class="flex items-center gap-6 text-sm font-medium">
          <a href="#about" class="hover:text-cyan-400 transition">About</a>
          <a href="#skills" class="hover:text-cyan-400 transition">Skills</a>
          <a href="#experience" class="hover:text-cyan-400 transition">Experience</a>
          <a href="#projects" class="hover:text-cyan-400 transition">Projects</a>
          <a href="#education" class="hover:text-cyan-400 transition">Education</a>
          <button (click)="copyEmail()" class="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-4 py-2 rounded-lg transition shadow-md shadow-cyan-500/20">
            {{ copied ? '✓ Copied!' : 'Contact Me' }}
          </button>
        </div>
      </nav>

      <!-- Hero Section -->
      <header id="about" class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="space-y-6 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Open to Work in Canada (Open Work Permit)
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
            Full-Stack Software Engineer
          </h1>
          <p class="text-slate-400 text-lg leading-relaxed">
            4+ years of engineering scalable, multi-tier microservices and high-performance applications using <span class="text-cyan-400 font-semibold">C#, .NET Core, Angular, SQL Server, and Azure</span> across Healthcare, Fintech, and E-commerce.
          </p>
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="https://linkedin.com/in/ranjan-khatiwada" target="_blank" class="px-5 py-2.5 rounded-lg border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition font-medium flex items-center gap-2">
              LinkedIn
            </a>
            <a href="https://github.com/ranjan010" target="_blank" class="px-5 py-2.5 rounded-lg border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition font-medium flex items-center gap-2">
              GitHub
            </a>
            <span class="text-slate-500">📍 Brampton, ON, Canada</span>
          </div>
        </div>
      </header>

      <!-- Interactive Skills Section -->
      <section id="skills" class="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
          <span class="text-cyan-400">#</span> Core Technical Stack
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition">
            <h3 class="text-cyan-400 font-semibold text-lg mb-4">Backend & Architecture</h3>
            <ul class="space-y-2 text-slate-300 text-sm">
              <li *ngFor="let s of backendSkills" class="flex items-center gap-2">
                <span class="text-cyan-400">▹</span> {{ s }}
              </li>
            </ul>
          </div>

          <div class="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition">
            <h3 class="text-cyan-400 font-semibold text-lg mb-4">Frontend & UI</h3>
            <ul class="space-y-2 text-slate-300 text-sm">
              <li *ngFor="let s of frontendSkills" class="flex items-center gap-2">
                <span class="text-cyan-400">▹</span> {{ s }}
              </li>
            </ul>
          </div>

          <div class="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition">
            <h3 class="text-cyan-400 font-semibold text-lg mb-4">Cloud, DevOps & Databases</h3>
            <ul class="space-y-2 text-slate-300 text-sm">
              <li *ngFor="let s of devopsSkills" class="flex items-center gap-2">
                <span class="text-cyan-400">▹</span> {{ s }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Interactive Work Experience Tabs -->
      <section id="experience" class="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
          <span class="text-cyan-400">#</span> Professional Experience
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <!-- Sidebar Tabs -->
          <div class="flex md:flex-col overflow-x-auto gap-2">
            <button 
              *ngFor="let exp of experiences; let i = index"
              (click)="selectedExpIndex = i"
              [class.border-cyan-400]="selectedExpIndex === i"
              [class.bg-slate-800]="selectedExpIndex === i"
              [class.text-cyan-400]="selectedExpIndex === i"
              class="px-4 py-3 text-left border-l-2 border-slate-700 hover:bg-slate-800/50 text-slate-400 transition font-medium whitespace-nowrap rounded-r-lg">
              {{ exp.company }}
            </button>
          </div>

          <!-- Active Experience Content -->
          <div class="md:col-span-3 bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 space-y-4">
            <div class="flex justify-between items-start flex-wrap gap-2">
              <div>
              <h3 class="text-xl font-bold text-slate-100">
  {{ activeExp.role }} <span class="text-cyan-400">&#64; {{ activeExp.company }}</span>
</h3>
                <p class="text-slate-400 text-sm font-medium">{{ activeExp.domain }} | {{ activeExp.location }}</p>
              </div>
              <span class="px-3 py-1 bg-slate-800 text-cyan-400 rounded-md text-xs font-mono">
                {{ activeExp.period }}
              </span>
            </div>

            <ul class="space-y-3 pt-2 text-slate-300 text-sm leading-relaxed">
              <li *ngFor="let highlight of activeExp.highlights" class="flex items-start gap-3">
                <span class="text-cyan-400 mt-1">▹</span>
                <span>{{ highlight }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2 pt-4">
              <span *ngFor="let skill of activeExp.skills" class="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs rounded-full">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Projects Section -->
      <section id="projects" class="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold flex items-center gap-3">
            <span class="text-cyan-400">#</span> Featured Projects
          </h2>
          <!-- Filter Buttons -->
          <div class="flex gap-2 bg-slate-800/80 p-1 rounded-lg border border-slate-700 text-xs">
            <button 
              *ngFor="let cat of projectCategories"
              (click)="activeCategory = cat"
              [class.bg-cyan-500]="activeCategory === cat"
              [class.text-slate-950]="activeCategory === cat"
              class="px-3 py-1.5 rounded-md transition font-semibold">
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            *ngFor="let p of filteredProjects" 
            class="p-6 bg-slate-800/40 rounded-xl border border-slate-700/60 hover:border-cyan-400 transition flex flex-col justify-between space-y-4">
            <div>
              <div class="flex justify-between items-center mb-2">
                <h3 class="text-xl font-bold text-slate-100">{{ p.title }}</h3>
                <a [href]="p.githubUrl" target="_blank" class="text-slate-400 hover:text-cyan-400 text-sm font-mono">GitHub ↗</a>
              </div>
              <p class="text-slate-400 text-sm leading-relaxed">{{ p.description }}</p>
            </div>

            <div class="flex flex-wrap gap-2 pt-2">
              <span *ngFor="let t of p.tech" class="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 rounded text-xs">
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section id="education" class="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
          <span class="text-cyan-400">#</span> Education
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <span class="text-cyan-400 text-xs font-mono">2024 - 2025</span>
            <h3 class="text-lg font-bold text-slate-100 mt-1">Post Graduate Certificate - Big Data Analytics, Machine Learning & AI</h3>
            <p class="text-slate-400 text-sm">Lambton College — Mississauga, ON, Canada</p>
          </div>
          <div class="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <span class="text-cyan-400 text-xs font-mono">2016 - 2020</span>
            <h3 class="text-lg font-bold text-slate-100 mt-1">Bachelor of Computer Science & IT (B.Sc. CSIT)</h3>
            <p class="text-slate-400 text-sm">Ambition College (Tribhuvan University) — Kathmandu, Nepal</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Ranjan Khatiwada. Built with Angular & Tailwind CSS.</p>
      </footer>
    </div>
  `
})
export class AppComponent {
  isDarkMode = true;
  copied = false;
  selectedExpIndex = 0;
  activeCategory = 'All';

  backendSkills = ['C# / .NET Core', 'ASP.NET Web API', 'RESTful Microservices', 'CQRS & MediatR', 'RabbitMQ & Event-Driven Architecture', 'Entity Framework Core & Dapper', 'SQL Server & PostgreSQL'];
  frontendSkills = ['Angular & TypeScript', 'RxJS & NgRx State Management', 'HTML5 / CSS3 / JavaScript', 'Knockout.JS', 'Tailwind CSS'];
  devopsSkills = ['Azure (App Services, Functions)', 'Azure DevOps & CI/CD Pipelines', 'Docker Packaging', 'ELK Stack & Serilog Observability', 'Moq, NUnit & xUnit Testing'];

  experiences: Experience[] = [
    {
      company: 'Cotiviti Nepal',
      role: 'Software Engineer',
      period: 'Jan 2023 – Dec 2023',
      location: 'Kathmandu, Nepal',
      domain: 'Healthcare Analytics',
      highlights: [
        'Designed & developed 3 scalable event-driven microservices using C#, .NET Core, RabbitMQ, and Dapper, cutting data processing time by 50%.',
        'Implemented Clean Architecture with CQRS (MediatR) to decouple business logic and improve testability.',
        'Built responsive UIs in Angular, TypeScript, RxJS, and NgRx for state management across complex healthcare analytics data views.',
        'Executed SQL Server database optimizations from scratch, improving fraud detection analytics performance by 30%.',
        'Maintained CI/CD pipelines in Bamboo integrated with SonarQube for automated builds and quality checks.'
      ],
      skills: ['C#', '.NET Core', 'Angular', 'NgRx', 'RabbitMQ', 'Dapper', 'SQL Server', 'Azure App Services']
    },
    {
      company: 'Riddhasoft',
      role: 'ASP.NET Developer',
      period: 'May 2021 – Jan 2023',
      location: 'Kathmandu, Nepal',
      domain: 'Financial Services',
      highlights: [
        'Engineered secure, multi-tier payment-processing applications in C# and .NET supporting 5,000+ active users.',
        'Configured automated CI/CD pipelines via Azure DevOps alongside Docker-based packaging.',
        'Reduced API latency by 25% through SQL Server query tuning, indexing, and .NET in-memory caching strategies.',
        'Developed 12 real-time business intelligence dashboards using KnockoutJS to visualize complex financial data transactions.'
      ],
      skills: ['C#', '.NET Framework', 'Azure DevOps', 'Docker', 'KnockoutJS', 'SQL Server', 'RabbitMQ']
    },
    {
      company: 'Silptech Solutions',
      role: 'Junior .NET Developer',
      period: 'Feb 2020 – Mar 2021',
      location: 'Kathmandu, Nepal',
      domain: 'E-commerce Platforms',
      highlights: [
        'Provided production support for 5 e-commerce clients, triaging application bugs and SQL data errors.',
        'Assisted senior developers with C# and ASP.NET MVC architectural updates, modifying checkout flows and catalog rules.'
      ],
      skills: ['C#', 'ASP.NET MVC', 'SQL Server', 'HTML/CSS']
    }
  ];

  projectCategories = ['All', 'Full-Stack', 'Backend'];

  projects: Project[] = [
    {
      title: 'OpsPilot — Multi-Tenant SaaS Platform',
      category: 'Full-Stack',
      tech: ['Angular', 'ASP.NET Core', 'Azure SQL', 'CQRS', 'MediatR', 'EF Core', 'JWT'],
      description: 'Built a multi-tenant SaaS platform for client support and work management featuring tenant-scoped workspace access, organization-based data isolation, and full audit logs.',
      githubUrl: 'https://github.com/ranjan010/OpsPilot'
    },
    {
      title: 'Background Job Processing Framework',
      category: 'Backend',
      tech: ['C#', '.NET Core', 'Hangfire', 'SQL Server', 'Concurrent Workloads'],
      description: 'Developed a scalable C#/.NET Core scheduled task execution system backed by SQL Server and Hangfire, featuring automatic failure retry logic and worker concurrency management.',
      githubUrl: 'https://github.com/ranjan010/background-job-framework'
    }
  ];

  get activeExp(): Experience {
    return this.experiences[this.selectedExpIndex];
  }

  get filteredProjects(): Project[] {
    if (this.activeCategory === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeCategory);
  }

  copyEmail() {
    navigator.clipboard.writeText('ranjan.kh11@gmail.com');
    this.copied = true;
    setTimeout(() => this.copied = false, 2500);
  }
}