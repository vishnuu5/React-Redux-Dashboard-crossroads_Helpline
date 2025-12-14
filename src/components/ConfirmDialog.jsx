import { AlertTriangle } from "lucide-react";

function ConfirmDialog({ title, message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md border border-border">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          </div>
          <p className="text-muted-foreground mb-6">{message}</p>
          <div className="flex justify-end gap-3">
            <button
              onClick={onCancel}
              className="btn-secondary bg-emerald-200 border-1 rounded-xl"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="btn-danger bg-red-500 border-1 rounded-xl"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
