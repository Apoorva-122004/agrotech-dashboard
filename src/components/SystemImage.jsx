export default function SystemImage() {
  return (
    <div className="bg-surface-container border border-outline-variant h-full overflow-hidden relative min-h-[160px]">
      <img 
        alt="Industrial hardware" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg_UdAuYhd05sdwkPErd9T_hVQGiZ1XT2KAASqS0Nq4WOgo0TeZrxPOENorDk4L_F_anBK0swiKDQxkMIr6BCj93Cd_J1D_GRMFQV6CeVZSYszK-NUVRaNo1AiiLkCQdQhnxR_Ue7V5OiZoqmjDPazLmBvZMdmm4PiWETqlxvvSWLB5GAEdOsfLvFsfB9DBqvwPN79vqOEFuc47d3iXNbr4ChUExdJt9C7tgtx96ALB514Z8wIbkB00Rm8wlWnkNuedc-EXR1Fv8Y"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <span className="font-label-caps text-primary-container">INFRASTRUCTURE_VISUAL</span>
        <p className="text-[10px] text-on-surface-variant">NODE_ID: AX-7742_BETA</p>
      </div>
    </div>
  );
}
