import React, { useState } from 'react';
import { 
  Monitor, 
  Code, 
  Zap, 
  ArrowRight, 
  Copy, 
  CheckCircle, 
  Rocket, 
  Globe,
  Lightbulb,
  Users,
  Settings,
  Play,
  ExternalLink
} from 'lucide-react';

function App() {
  const [copiedLink, setCopiedLink] = useState(false);
  const projectLink = "https://bolt.new/?rid=1v4ot7";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(projectLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const steps = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Access Your Project",
      description: "Click the project link to open your Bolt.new workspace instantly",
      action: "Visit Project"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Start Coding",
      description: "Begin editing your code directly in the browser-based IDE",
      action: "Edit Code"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Preview Live",
      description: "See your changes in real-time with the integrated preview panel",
      action: "View Preview"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deploy Instantly",
      description: "Deploy your application with one click to share with the world",
      action: "Go Live"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Development",
      description: "No setup required. Start coding immediately in your browser."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Live Preview",
      description: "See your changes instantly with hot reloading and real-time updates."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Full-Stack Ready",
      description: "Support for React, Node.js, databases, and modern frameworks."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Share your project links and collaborate in real-time."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">EranFixer</h1>
                <p className="text-sm text-blue-200">Digital Solutions Guide</p>
              </div>
            </div>
            <a 
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl transition-colors"
            >
              <span>Open Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative py-20 lg:py-32" aria-labelledby="hero-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="hero-title" className="text-5xl lg:text-7xl font-bold text-white mb-6">
              How to Use
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Bolt.new
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Master the power of instant web development with our comprehensive guide. 
              Build, preview, and deploy applications directly in your browser.
            </p>
            
            {/* Project Link Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-12 max-w-2xl mx-auto border border-white/20" role="region" aria-labelledby="project-link-heading">
              <div className="flex items-center justify-between mb-4">
                <h2 id="project-link-heading" className="text-lg font-semibold text-white">Your Project Link</h2>
                <button
                  onClick={copyLink}
                  aria-label={copiedLink ? 'Link copied to clipboard' : 'Copy project link to clipboard'}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl transition-colors"
                >
                  {copiedLink ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-4 font-mono text-sm text-blue-200 break-all">
                {projectLink}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start building with Bolt.new - opens in new tab"
                aria-label="Open Bolt.new project in new tab"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105"
              >
                <span>Start Building Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all border border-white/20" aria-label="Watch tutorial video">
                <span>Watch Tutorial</span>
                <Play className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        </section>

      {/* Steps Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm" aria-labelledby="steps-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="steps-heading" className="text-4xl font-bold text-white mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-xl text-blue-100">Follow these steps to master Bolt.new development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative" role="article" aria-labelledby={`step-${index + 1}-title`}>
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm" aria-label={`Step ${index + 1}`}>
                    {index + 1}
                  </div>
                  <h3 id={`step-${index + 1}-title`} className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-blue-100 mb-6">{step.description}</p>
                  <button className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 py-3 rounded-2xl transition-colors border border-blue-500/30" aria-label={`Learn more about ${step.title}`}>
                    {step.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

      {/* Features Section */}
        <section className="py-20" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-blue-100">Everything you need for modern web development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all" role="article" aria-labelledby={`feature-${index + 1}-title`}>
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 id={`feature-${index + 1}-title`} className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

      {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Your Bolt.new project is waiting. Start creating your next breakthrough application today.
          </p>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Launch your Bolt.new project - opens in new tab"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 rounded-3xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl"
          >
            <Rocket className="w-6 h-6" />
            <span>Launch Your Project</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-md border-t border-white/10 py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">EranFixer</h3>
                <p className="text-sm text-blue-200">Digital Solutions & AI Innovation</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-blue-200">
              <a href="tel:+972522126366" className="hover:text-white transition-colors" aria-label="Call EranFixer">052-212-6366</a>
              <span>•</span>
              <a href="https://eranfixer.co.il" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Visit EranFixer website">ERANFIXER.CO.IL</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-blue-300">
            <p>&copy; 2025 EranFixer. Empowering digital innovation with AI-powered solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;