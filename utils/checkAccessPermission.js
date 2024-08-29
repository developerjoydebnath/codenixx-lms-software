export const checkAccessPermission = ({ base_role, permissions, required_permissions }) => {
    if (["admin"].indexOf(base_role) > -1) {
        return true;
    } else if (required_permissions.indexOf(base_role) > -1) {
        return true;
    } else if (permissions.length > 0) {
        return required_permissions.some((permission) => permissions.indexOf(permission) > -1);
    } else {
        return false;
    }
};
