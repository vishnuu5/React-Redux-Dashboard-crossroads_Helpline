import { useDispatch } from "react-redux";
import { clearError } from "../redux/slices/usersSlice";
import { AlertCircle, X } from "lucide-react";

function ErrorAlert({ message }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-destructive mb-1">Error</h3>
          <p className="text-sm text-destructive/90">{message}</p>
        </div>
        <button
          onClick={() => dispatch(clearError())}
          className="p-1 hover:bg-destructive/10 rounded transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4 text-destructive" />
        </button>
      </div>
    </div>
  );
}

export default ErrorAlert;
