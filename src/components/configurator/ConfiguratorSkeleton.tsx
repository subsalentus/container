"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Layers, 
  Paintbrush, 
  DoorOpen, 
  Cpu, 
  Boxes, 
  ChevronRight, 
  Info,
  Maximize2,
  Minimize2,
  Sparkles
} from "lucide-react";

// Dynamically import the 3D scene to prevent SSR errors
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#F3F2EE] text-zinc-500 gap-4">
      <div className="w-10 h-10 border-4 border-zinc-350 border-t-zinc-800 rounded-full animate-spin" />
      <span className="font-mono text-xs tracking-wider uppercase text-zinc-500">Loading 3D Studio...</span>
    </div>
  ),
});

type TabType = "layout" | "materials" | "openings" | "utilities";

export default function ConfiguratorSkeleton() {
  const [activeTab, setActiveTab] = useState<TabType>("layout");
  const [containerSize, setContainerSize] = useState<"20ft" | "40ft">("20ft");
  const [cladding, setCladding] = useState<"steel" | "cedar" | "composite">("steel");
  const [paintColor, setPaintColor] = useState<string>("#B2C3B8"); // Default Mint Sage
  const [glassType, setGlassType] = useState<"double" | "triple">("double");
  const [solarEnabled, setSolarEnabled] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Tab configurations
  const tabs = [
    { id: "layout" as TabType, label: "Layout", icon: Layers },
    { id: "materials" as TabType, label: "Materials", icon: Paintbrush },
    { id: "openings" as TabType, label: "Openings", icon: DoorOpen },
    { id: "utilities" as TabType, label: "Utilities", icon: Cpu },
  ];

  // Low-profile earth/pastel colors
  const colors = [
    { value: "#B2C3B8", name: "Mint Sage" },
    { value: "#E6DFD3", name: "Matte Sand" },
    { value: "#ECE7E1", name: "Ivory White" },
    { value: "#B8C0C4", name: "Pebble Slate" },
    { value: "#D7B9AD", name: "Dusty Terracotta" },
  ];

  // Interactive Pricing calculation
  const calculatePrice = () => {
    let base = containerSize === "20ft" ? 45000 : 75000;
    if (cladding === "cedar") base += 8500;
    if (cladding === "composite") base += 12000;
    if (paintColor !== "#B2C3B8") base += 1500;
    if (glassType === "triple") base += 3500;
    if (solarEnabled) base += 9500;
    return base;
  };

  return (
    <div className="flex h-screen w-screen bg-[#F5F5F7] text-zinc-800 font-sans overflow-hidden select-none">
      
      {/* Sidebar Panel */}
      <aside className="w-96 flex flex-col border-r border-zinc-200 bg-white z-20 shrink-0 shadow-sm">
        
        {/* Header */}
        <div className="p-5 border-b border-zinc-100 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-mono font-semibold">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 rounded-full px-2.5 py-0.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-mono text-zinc-650 uppercase tracking-widest font-semibold">v1.0 Demo</span>
          </div>
        </div>

        {/* Brand Name & Config State */}
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-bold tracking-tight text-zinc-900">ModuSphere Studio</h1>
            <p className="text-[11px] text-zinc-400 font-mono mt-0.5">Workspace // active_config_01</p>
          </div>
          <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center border border-zinc-200 shadow-sm">
            <Boxes className="w-4 h-4 text-zinc-700" />
          </div>
        </div>

        {/* Tab Selection */}
        <div className="px-4 pb-2">
          <div className="flex bg-zinc-100/80 p-1 rounded-xl border border-zinc-200/50 shadow-inner">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-[10px] font-bold font-mono tracking-wider transition-all relative ${
                    isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-white border border-zinc-200 rounded-lg shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Configurator Controls Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.12 }}
              className="space-y-6"
            >
              {/* Tab 1: Layout Controls */}
              {activeTab === "layout" && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest">Container Footprint</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setContainerSize("20ft")}
                        className={`p-3 rounded-xl border text-left transition-all shadow-sm ${
                          containerSize === "20ft"
                            ? "bg-teal-50/50 border-teal-500/60 text-teal-900"
                            : "bg-zinc-50/40 border-zinc-200 hover:border-zinc-300 text-zinc-600"
                        }`}
                      >
                        <span className="block font-bold text-xs">20ft Cargo</span>
                        <span className="block text-[9px] font-mono text-zinc-400 mt-1">6.06m × 2.44m × 2.59m</span>
                      </button>
                      <button
                        onClick={() => setContainerSize("40ft")}
                        className={`p-3 rounded-xl border text-left transition-all shadow-sm ${
                          containerSize === "40ft"
                            ? "bg-teal-50/50 border-teal-500/60 text-teal-900"
                            : "bg-zinc-50/40 border-zinc-200 hover:border-zinc-300 text-zinc-600"
                        }`}
                      >
                        <span className="block font-bold text-xs">40ft Space</span>
                        <span className="block text-[9px] font-mono text-zinc-400 mt-1">12.19m × 2.44m × 2.59m</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest">Foundation Support</label>
                    <select className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-xs text-zinc-700 focus:outline-none focus:border-teal-500 shadow-sm">
                      <option>Concrete Pier Foundation (snapped)</option>
                      <option>Slab Foundation</option>
                      <option>Helical Piles</option>
                    </select>
                  </div>

                  <div className="bg-sky-50/60 border border-sky-100 rounded-xl p-4 flex gap-3 items-start shadow-sm">
                    <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-sky-800 leading-relaxed">
                      Standard ISO containers allow stacking up to 9 units high. Snap guidelines are active to lock columns into structural corner castings automatically.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Materials Controls */}
              {activeTab === "materials" && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest">Facade Cladding</label>
                    <div className="space-y-2.5">
                      {[
                        { id: "steel", label: "Corten Steel Panels", desc: "Original corrugated structural skin", price: "Included" },
                        { id: "cedar", label: "Western Red Cedar", desc: "Sustainable timber horizontal battens", price: "+ $8,500" },
                        { id: "composite", label: "Composite Slate Cladding", desc: "Ultra-insulated matte rainscreen", price: "+ $12,000" }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setCladding(item.id as "steel" | "cedar" | "composite")}
                          className={`w-full p-3.5 rounded-xl border text-left flex justify-between items-center transition-all shadow-sm ${
                            cladding === item.id
                              ? "bg-teal-50/50 border-teal-500/60 text-teal-900"
                              : "bg-zinc-50/40 border-zinc-200 hover:border-zinc-300 text-zinc-600"
                          }`}
                        >
                          <div>
                            <span className="block font-bold text-xs">{item.label}</span>
                            <span className="block text-[10px] text-zinc-450 mt-0.5">{item.desc}</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-zinc-500">{item.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {cladding === "steel" && (
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest">Corrugated Paint Finish</label>
                      <div className="flex gap-3">
                        {colors.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => setPaintColor(color.value)}
                            style={{ backgroundColor: color.value }}
                            className={`w-8 h-8 rounded-full border-2 transition-all relative ${
                              paintColor === color.value 
                                ? "border-zinc-800 scale-110 shadow-sm" 
                                : "border-transparent hover:scale-105 hover:border-zinc-200"
                            }`}
                            title={color.name}
                          >
                            {paintColor === color.value && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                      <p className="text-[10px] font-mono text-zinc-500 mt-2">Active Color: {colors.find(c => c.value === paintColor)?.name}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Openings Controls */}
              {activeTab === "openings" && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest">Glazing Standard</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setGlassType("double")}
                        className={`p-3 rounded-xl border text-left transition-all shadow-sm ${
                          glassType === "double"
                            ? "bg-teal-50/50 border-teal-500/60 text-teal-900"
                            : "bg-zinc-50/40 border-zinc-200 hover:border-zinc-300 text-zinc-600"
                        }`}
                      >
                        <span className="block font-bold text-xs">Double Glazed</span>
                        <span className="block text-[10px] text-zinc-450 mt-1">U-Value 1.4 // Standard</span>
                      </button>
                      <button
                        onClick={() => setGlassType("triple")}
                        className={`p-3 rounded-xl border text-left transition-all shadow-sm ${
                          glassType === "triple"
                            ? "bg-teal-50/50 border-teal-500/60 text-teal-900"
                            : "bg-zinc-50/40 border-zinc-200 hover:border-zinc-300 text-zinc-600"
                        }`}
                      >
                        <span className="block font-bold text-xs">Triple Glazed</span>
                        <span className="block text-[10px] text-zinc-450 mt-1">U-Value 0.8 // + $3,500</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest">Add Openings (snaps to grid)</label>
                    <button className="w-full bg-zinc-55 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 font-bold px-4 py-3 rounded-xl transition-all text-xs flex items-center justify-between shadow-sm">
                      <span>Add Panoramic Sliding Door</span>
                      <ChevronRight className="w-4 h-4 text-zinc-400" />
                    </button>
                    <button className="w-full bg-zinc-55 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 font-bold px-4 py-3 rounded-xl transition-all text-xs flex items-center justify-between shadow-sm">
                      <span>Add High Ribbon Window</span>
                      <ChevronRight className="w-4 h-4 text-zinc-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 4: Utilities Controls */}
              {activeTab === "utilities" && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between p-3.5 bg-zinc-50/50 border border-zinc-200 rounded-xl shadow-sm">
                    <div>
                      <span className="block font-bold text-xs text-zinc-800">Off-Grid Solar Integration</span>
                      <span className="block text-[10px] text-zinc-450 mt-0.5">5kW solar & storage array</span>
                    </div>
                    <button
                      onClick={() => setSolarEnabled(!solarEnabled)}
                      className={`w-11 h-6 rounded-full p-0.5 transition-colors shadow-inner ${
                        solarEnabled ? "bg-emerald-500" : "bg-zinc-250"
                      }`}
                    >
                      <div className={`bg-white w-5 h-5 rounded-full transition-transform shadow-sm ${
                        solarEnabled ? "translate-x-5" : "translate-x-0"
                      }`} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest">HVAC Package</label>
                    <select className="w-full bg-zinc-55 border border-zinc-200 rounded-xl px-4 py-3 text-xs text-zinc-700 focus:outline-none focus:border-teal-500 shadow-sm">
                      <option>Mini-Split Heat Pump // Included</option>
                      <option>Off-Grid Wood-Burner Stove // + $2,400</option>
                      <option>Energy Recovery Ventilator // + $1,800</option>
                    </select>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pricing & Footer of Sidebar */}
        <div className="p-6 border-t border-zinc-100 bg-zinc-50/60 space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-zinc-500">
              <span>Selected Options</span>
              <span className="font-mono text-[10px]">
                {containerSize} // {cladding === "steel" ? "Corten" : cladding}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-zinc-700">Total Price Estimate</span>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600 font-mono">
                ${calculatePrice().toLocaleString()}
              </span>
            </div>
          </div>

          <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-4 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs hover:scale-[1.01]">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Generate Engineering Drafts</span>
          </button>
        </div>
      </aside>

      {/* Main 3D Viewport Panel */}
      <main className="flex-1 h-full relative flex flex-col bg-[#F3F2EE] overflow-hidden">
        
        {/* Top Controls Overlay bar */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
          {/* Workspace Indicators */}
          <div className="flex items-center gap-2 backdrop-blur-md bg-white/90 border border-zinc-200/80 rounded-xl px-4 py-2 pointer-events-auto shadow-sm text-zinc-800">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-semibold">
              Module Footprint: {containerSize === "20ft" ? "6.06m × 2.44m" : "12.19m × 2.44m"}
            </span>
          </div>

          {/* View Helper Tools */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <div className="flex bg-white/90 backdrop-blur-md border border-zinc-200/80 rounded-xl p-1 text-[10px] font-mono text-zinc-500 shadow-sm">
              <button className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-900 font-bold border border-zinc-200">3D Orbit</button>
              <button className="px-3 py-1.5 rounded-lg hover:text-zinc-800">Top</button>
              <button className="px-3 py-1.5 rounded-lg hover:text-zinc-800">Front</button>
            </div>
            
            <button 
              onClick={() => {
                if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen();
                  setIsFullscreen(true);
                } else {
                  document.exitFullscreen();
                  setIsFullscreen(false);
                }
              }}
              className="w-9 h-9 rounded-xl backdrop-blur-md bg-white/90 border border-zinc-200/80 flex items-center justify-center hover:bg-zinc-50 transition-colors shadow-sm"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 text-zinc-650" />
              ) : (
                <Maximize2 className="w-4 h-4 text-zinc-650" />
              )}
            </button>
          </div>
        </div>

        {/* 3D Scene viewport (100% width/height of parent) */}
        <div className="w-full h-full">
          <Scene />
        </div>

        {/* Floating specifications HUD at bottom right */}
        <div className="absolute bottom-4 right-4 z-10 backdrop-blur-md bg-white/90 border border-zinc-200/80 rounded-xl p-4 flex gap-6 font-mono text-[10px] text-zinc-550 shadow-sm select-none">
          <div>
            <span className="block text-zinc-400 uppercase tracking-widest text-[8px] font-bold">Total Area</span>
            <span className="text-zinc-800 font-extrabold text-xs mt-0.5 block">
              {containerSize === "20ft" ? "14.8 m²" : "29.7 m²"}
            </span>
          </div>
          <div className="w-px bg-zinc-200" />
          <div>
            <span className="block text-zinc-400 uppercase tracking-widest text-[8px] font-bold">Base Weight</span>
            <span className="text-zinc-800 font-extrabold text-xs mt-0.5 block">
              {containerSize === "20ft" ? "2,200 kg" : "3,700 kg"}
            </span>
          </div>
          <div className="w-px bg-zinc-200" />
          <div>
            <span className="block text-zinc-400 uppercase tracking-widest text-[8px] font-bold">Thermal (U)</span>
            <span className="text-zinc-800 font-extrabold text-xs mt-0.5 block">
              {glassType === "double" ? "1.4 W/m²K" : "0.8 W/m²K"}
            </span>
          </div>
        </div>

      </main>
    </div>
  );
}
