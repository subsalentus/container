"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Layers3, 
  ShieldCheck, 
  MousePointerClick, 
  Hammer, 
  DollarSign, 
  Activity, 
  Boxes 
} from "lucide-react";

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-800 font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden relative">
      {/* Soft Pastel Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[50vh] right-1/4 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[120vh] left-1/3 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF9F6]/80 border-b border-zinc-200/50 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center shadow-sm group-hover:scale-102 transition-transform">
              <Boxes className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">
              ModuSphere
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-100 border border-zinc-200/80 rounded-full px-2.5 py-0.5 ml-2 font-mono">
              B2B SaaS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
            <a href="#workflow" className="hover:text-zinc-900 transition-colors">How It Works</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">B2B Solutions</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="/configurator" 
              className="inline-flex items-center justify-center text-xs font-semibold rounded-full bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 transition-colors shadow-sm"
            >
              Launch Configurator
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-xs font-mono text-zinc-600 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Next-Gen White-Label Configurator</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-zinc-900"
            >
              Design Your Dream <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Container Home</span> in 3D.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-zinc-650 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Empower your clients with a fully customizable, white-label 3D simulator. Render modular architectural layouts, swap custom claddings, and receive real-time material bills instantly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <Link 
                href="/configurator" 
                className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md shadow-zinc-900/10 hover:scale-[1.01]"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#features"
                className="flex items-center justify-center bg-white hover:bg-zinc-50 border border-zinc-200/80 text-zinc-700 font-medium px-8 py-4 rounded-xl transition-all shadow-sm"
              >
                Explore Features
              </a>
            </motion.div>

            {/* Core Specs / Trust Metrics */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-200 w-full"
            >
              <div>
                <p className="text-2xl font-bold text-teal-600 font-mono">100%</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Interactive 3D</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-700 font-mono">Instant</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Cost Breakdown</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-700 font-mono">B2B</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">White-Label Ready</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Preview Card */}
          <motion.div 
            className="lg:col-span-5 relative w-full flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group w-full max-w-[450px]">
              {/* Outer Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-200 to-rose-200 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000 -z-10" />

              {/* Main Card Frame */}
              <div className="relative bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-[380px] w-full bg-zinc-100">
                  <Image
                    src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1000"
                    alt="Shipping Container Home Preview"
                    fill
                    sizes="(max-width: 450px) 100vw, 450px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />

                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-white/90 border border-zinc-200/80 rounded-lg p-2.5 flex items-center gap-2 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-medium text-zinc-700">Live 3D Renderer Active</span>
                  </div>

                  <div className="absolute bottom-4 right-4 backdrop-blur-md bg-white/95 border border-zinc-200/80 rounded-lg px-3 py-1.5 font-mono text-xs text-teal-600 shadow-sm">
                    Est. Build: 8 Weeks
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900">The Nordic Duplex</h3>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">Model: 2x 20ft Cargo Stack</p>
                    </div>
                    <span className="bg-teal-50 text-teal-700 border border-teal-100 text-xs px-2.5 py-1 rounded-full font-mono font-semibold">
                      $74,500
                    </span>
                  </div>

                  <div className="h-px bg-zinc-100" />

                  {/* Micro features list */}
                  <div className="grid grid-cols-2 gap-y-2 text-xs text-zinc-650">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>R-30 Eco-Insulation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers3 className="w-3.5 h-3.5 text-teal-600" />
                      <span>Dual Floor Layout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                      <span>Cladding Customizer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-teal-600" />
                      <span>Modular Solar Array</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* "How It Works" Section */}
      <section id="workflow" className="relative border-t border-zinc-200/60 bg-white/50 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-mono text-teal-600 uppercase tracking-widest">Digital Manufacturing</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              How the Configurator Works
            </p>
            <p className="text-zinc-500 text-sm sm:text-base">
              Clients construct modular maritime homes inside a browser-based, photorealistic environment that integrates seamlessly with your supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div 
              className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-zinc-300 transition-colors shadow-sm group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <MousePointerClick className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3">1. Design Layout</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Choose standard container modules (20ft, 40ft, high-cube) and drag to stack them. Create multi-level structures, cantilevered balconies, and open floor layouts in real-time.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-zinc-300 transition-colors shadow-sm group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                <Hammer className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3">2. Customize Materials</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Incorporate doors, wide sliders, and double-glazed windows. Customize claddings, timber panel highlights, roof gardens, solar panel arrays, and paint finishes.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-zinc-300 transition-colors shadow-sm group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:bg-sky-100 transition-colors">
                <DollarSign className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3">3. Direct Quotation</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Recalculate structure estimates continuously. Download floor drafts, detailed architectural footprints, and automatically generated Bills of Materials (BOM) to request a factory slot.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature List Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-xs font-mono text-teal-600 uppercase tracking-widest">Commercial Integrations</h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              White-Label Software Crafted for Manufacturers & Builders
            </h3>
            <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
              We design, build, and license the engine. Embed it on your commercial landing page, connect it to your product catalog, and allow prospects to configure modular spaces and request contracts in real-time.
            </p>
            
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-800">Factory-Ready Dimensions</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Constrains user configurations strictly to engineering standards (ISO container specs).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-800">Custom Brand Skins</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Change typography, themes, logo injections, and catalog lists via a single B2B control panel.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-800">CRM & ERP Hooks</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Deliver detailed builder configs directly to HubSpot, Salesforce, or your custom inventory pipeline.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative aspect-video lg:aspect-square bg-white border border-zinc-200 rounded-2xl overflow-hidden p-8 flex items-center justify-center shadow-sm">
            <div className="absolute top-4 left-4 font-mono text-[10px] text-zinc-400">CAD_LAYOUT_PREVIEW.DWG</div>
            <div className="w-full h-full border border-dashed border-zinc-200 rounded-xl relative flex flex-col items-center justify-center text-center p-6 space-y-4">
              <Boxes className="w-16 h-16 text-zinc-300 animate-pulse" />
              <div className="space-y-1">
                <p className="text-sm font-bold text-zinc-700">Modular Grid Constraints</p>
                <p className="text-xs text-zinc-500 max-w-xs">Strict snapping aligns columns, load nodes, and corner castings correctly for container stack safety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="relative bg-zinc-100 border border-zinc-200/80 rounded-3xl p-12 lg:p-16 text-center space-y-6 overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-50/40 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 max-w-2xl mx-auto">
            Give Your Customers the Ultimate Design Experience
          </h2>
          <p className="text-zinc-650 max-w-xl mx-auto text-sm">
            Embed ModuSphere on your site. Capture high-intent leads, decrease pre-sales design loops, and accelerate construction quoting times.
          </p>
          <div className="pt-4 flex justify-center">
            <Link 
              href="/configurator" 
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md"
            >
              <span>Launch 3D Configurator</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 bg-zinc-50 py-12 px-6 lg:px-12 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-zinc-900 flex items-center justify-center">
              <Boxes className="w-3.5 h-3.5 text-white stroke-[2.5]" />
            </div>
            <span className="font-bold text-zinc-700">ModuSphere Configurator</span>
            <span className="text-[9px] text-zinc-400 font-mono">v1.0.0</span>
          </div>

          <div className="flex items-center gap-8 font-medium">
            <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
            <a href="#workflow" className="hover:text-zinc-900 transition-colors">Workflow</a>
            <span className="text-zinc-300">|</span>
            <p>© 2026 ModuSphere Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
