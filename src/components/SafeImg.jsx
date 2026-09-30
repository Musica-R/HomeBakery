import { useState } from "react";
// Shows a soft cream placeholder if an image fails to load.
export default function SafeImg({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`img-fallback ${className || ""}`} role="img" aria-label={alt} />;
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
