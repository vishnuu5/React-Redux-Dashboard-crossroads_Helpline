import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/usersSlice";
import UserTable from "./UserTable";
import UserModal from "./UserModal";
import LoadingSpinner from "./LoadingSpinner";
import ErrorAlert from "./ErrorAlert";
import { Plus, RefreshCw } from "lucide-react";

function Dashboard() {
  const dispatch = useDispatch();
  const { items: users, loading, error } = useSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchUsers());
  };

  const handleCreate = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="space-y-6">
      {/* Stats Card */}
      <div className="card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Total Users
            </h2>
            <p className="text-3xl font-bold text-primary mt-1">
              {users.length}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="btn-secondary flex items-center gap-2 text-white bg-violet-600 border-1 rounded-xl"
            >
              <RefreshCw
                className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
              />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button
              onClick={handleCreate}
              className="btn-primary flex items-center gap-2 text-white bg-cyan-700 border-1 rounded-xl"
            >
              <Plus className="w-4 h-4" />
              Add User
            </button>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {error && <ErrorAlert message={error} />}

      {/* Loading State */}
      {loading && users.length === 0 ? (
        <LoadingSpinner />
      ) : (
        /* User Table */
        <UserTable users={users} onEdit={handleEdit} />
      )}

      {/* User Modal */}
      {isModalOpen && (
        <UserModal user={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Dashboard;
