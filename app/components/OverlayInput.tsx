import { motion } from "framer-motion";

function OverlayInput() {
  return (
    <motion.div
      className="fixed bottom-1 w-full max-w-7xl p-6"
      initial={{ y: "6rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="col-span-full flex items-center justify-between gap-3 rounded-lg border bg-gray-200/60 p-3">
        <input
          type={"text"}
          className="flex-auto rounded-md bg-gray-600 py-2 px-4"
        />
        <p>Tambah</p>
      </div>
    </motion.div>
  );
}

export { OverlayInput };
