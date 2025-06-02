import React from "react";
import rupeeIcon from "../assets/features/save-money.png";
import handshakeIcon from "../assets/features/door-to-door-visibility.png";
import groupIcon from "../assets/features/Customer-Auto-intimation.png";
import auditIcon from "../assets/features/Reduce-manual-work.png";
import shieldIcon from "../assets/features/Reliable-and-Consistent.png";

const features = [
  {
    title: "Save 20% to 25% of landed cost annually",
    desc: `Obtain the best freight rates through AI-driven system where you can scan 100’s of option across Carriers, NVOCC, & CHA to find the best logistics cost, vessel schedule, transit time and the availability of inventory. Also, 1-click`,
    icon: rupeeIcon,
  },
  {
    title: "Door to door visibility",
    desc: `Give door 2 door real time visibility of your cargo across the first mile, ocean, customs and the last mile with automated status updates at every step.`,
    icon: handshakeIcon,
  },
  {
    title: "Customer Auto intimation",
    desc: `Trigger automatic alerts on shipment delays, transhipment aging and send automatic emails, SMSs, WhatsApp updates to customers on delivery progress`,
    icon: groupIcon,
    highlight: true,
  },
  {
    title: "Reduced Manual work by 30%",
    desc: `Gain greater control over your complete audit trail and negotiation. Manage your end-to-end booking process from a single dashboard and save time.`,
    icon: auditIcon,
  },
  {
    title: "Reliable and Consistent",
    desc: `Your shipment is handled by experts who have decades of experience in managing international shipments. So, you can be sure of getting your Bill of Lading on time.`,
    icon: shieldIcon,
  },
];

export default function SupplyChainFeatures() {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800">
        WE MAKE YOUR SUPPLY CHAIN HIGHLY
        <br className="hidden md:block" /> VISIBLE AND COST-OPTIMISED
      </h2>

      <div className="grid gap-6 md:grid-cols-5">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-md p-6 text-left min-h-[420px] ${
              feature.highlight ? "bg-purple-50" : "bg-white"
            }`}
          >
            <img src={feature.icon} alt="icon" className="h-14 mb-5" />
            <h3 className="text-lg font-bold text-indigo-900 mb-3 leading-snug">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
