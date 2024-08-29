import { checkAccessPermission } from "@/utils/checkAccessPermission";

export default function PermissionGranted({ children, base_role, permissions, required_permissions }) {
    return checkAccessPermission({
        base_role,
        permissions,
        required_permissions,
    }) ? (
        <>{children}</>
    ) : null;
}
