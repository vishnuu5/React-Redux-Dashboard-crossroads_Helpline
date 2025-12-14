import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../redux/slices/usersSlice";
import { X } from "lucide-react";

function UserModal({ user, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
    },
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        website: user.website || "",
        company: {
          name: user.company?.name || "",
        },
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "companyName") {
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          name: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (user) {
      dispatch(editUser({ id: user.id, userData: formData }));
    } else {
      dispatch(addUser(formData));
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-white">
          <h2 className="text-xl font-bold text-foreground">
            {user ? "Edit User" : "Add New User"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white overflow-y-auto max-h-[calc(90vh-140px)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input-field ${
                  errors.name ? "border-destructive" : ""
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Username <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`input-field ${
                  errors.username ? "border-destructive" : ""
                }`}
                placeholder="johndoe"
              />
              {errors.username && (
                <p className="text-destructive text-xs mt-1">
                  {errors.username}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input-field ${
                  errors.email ? "border-destructive" : ""
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Phone <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input-field ${
                  errors.phone ? "border-destructive" : ""
                }`}
                placeholder="+1-555-123-4567"
              />
              {errors.phone && (
                <p className="text-destructive text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Website */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="input-field"
                placeholder="www.example.com"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Company
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.company.name}
                onChange={handleChange}
                className="input-field"
                placeholder="Company Inc."
              />
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-border bg-white">
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary bg-zinc-500 border-1 rounded-xl"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn-primary bg-orange-400 border-1 rounded-xl"
          >
            {user ? "Update User" : "Create User"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
