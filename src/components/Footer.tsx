export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
