export default function LoadingScreen() {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#12151C] z-50">
        <img className="cursor-pointer h-[80px] pt-[10px]"
          src="/logo.svg"
          alt="Logo"
        />
        <h1 className="text-[24px] text-white pt-[10px]">LearnToCodeBooks</h1>
      </div>
    );
  }
  