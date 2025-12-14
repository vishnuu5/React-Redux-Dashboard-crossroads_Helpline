import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/usersSlice";
import { Edit, Trash2, Mail, Phone, Globe } from "lucide-react";
import ConfirmDialog from "./ConfirmDialog";

function UserTable({ users, onEdit }) {
  const dispatch = useDispatch();
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDelete = (user) => {
    setUserToDelete(user);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      dispatch(removeUser(userToDelete.id));
      setUserToDelete(null);
    }
  };

  const cancelDelete = () => {
    setUserToDelete(null);
  };

  if (users.length === 0) {
    return (
      <div className="card p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No users found
          </h3>
          <p className="text-muted-foreground">
            Get started by adding your first user.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Website
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center bg-red-300 border-1">
                        <span className="text-primary font-semibold text-sm">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-semibold text-foreground">
                          {user.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          @{user.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-foreground">
                      <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                      {user.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-foreground">
                      <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                      {user.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-foreground">
                      <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
                      {user.website}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-foreground">
                      {user.company?.name || "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => onEdit(user)}
                        className="p-2 text-primary hover:bg-primary/10 transition-colors bg-lime-300 border-1 rounded-xl"
                        title="Edit user"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(user)}
                        className="p-2 text-destructive hover:bg-destructive/10 transition-colors bg-red-500 border-1 rounded-xl"
                        title="Delete user"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden divide-y divide-border">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center bg-red-300 border-1">
                    <span className="text-primary font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-foreground">
                      {user.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      @{user.username}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(user)}
                    className="p-2 text-primary hover:bg-primary/10 transition-colors bg-lime-300 border-1 rounded-xl"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(user)}
                    className="p-2 text-destructive hover:bg-destructive/10 transition-colors bg-red-500 border-1 rounded-xl"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-foreground">
                  <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                  {user.phone}
                </div>
                <div className="flex items-center text-foreground">
                  <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
                  {user.website}
                </div>
                {user.company?.name && (
                  <div className="text-muted-foreground">
                    Company:{" "}
                    <span className="font-medium text-foreground">
                      {user.company.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirm Delete Dialog */}
      {userToDelete && (
        <ConfirmDialog
          title="Delete User"
          message={`Are you sure you want to delete ${userToDelete.name}? This action cannot be undone.`}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
}

export default UserTable;
