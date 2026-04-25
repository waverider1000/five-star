import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-6xl mb-6">✦</span>
      <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-gray text-lg mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back on track.
      </p>
      <Button href="/">Back to Home</Button>
    </div>
  );
}
