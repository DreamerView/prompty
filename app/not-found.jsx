// app/not-found.jsx
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/404.png"

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: 600 }}
    >
      <div style={{ width: 300, height: 300, position: "relative" }}>
        <Image src={logo} alt="404" fill style={{ objectFit: "contain" }} />
    </div>
      <Link href="/" className="btn btn-warning px-4 py-2 rounded-4 btn-lg">
        Back home
      </Link>
    </div>
  );
}
