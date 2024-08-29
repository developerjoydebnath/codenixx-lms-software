"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { show_toast } from "@/utils/show_toast";
import { StringReplace } from "@/utils/string_replace";
import { useState } from "react";

export const MangePermissionBlock = ({ user_uid, user_permissions = [], permissionList }) => {
    const [userPermissions, setUserPermissions] = useState(user_permissions);

    const addRemovePermission = async (v) => {
        const index = userPermissions.indexOf(v);
        // console.log('v', v);
        if (index === -1) {
            setUserPermissions([...userPermissions, v]);
            show_toast("success", "Permission Granted");
            // await http_post_request({
            //     endpoint: `/panel/users/${uid}/permissions/update`,
            //     data: { name: v },
            // }).then(function (resp) {
            //     // console.log('perm resp', resp);
            //     toast.success('Success!');
            // });
        } else if (index >= 0) {
            setUserPermissions(userPermissions.filter((vItem) => vItem !== v));
            show_toast("info", "Permission Removed");
            // await http_post_request({
            //     endpoint: `/panel/users/${uid}/permissions/update`,
            //     data: { name: v },
            // }).then(function (resp) {
            //     // console.log('perm resp', resp);
            //     toast.info('Removed!');
            // });
        }
    };

    return (
        <ScrollArea className="flex h-full max-h-[400px] flex-col justify-between rounded-lg">
            <div className="mx-1 grid h-full grid-cols-1 overflow-auto">
                {permissionList !== null &&
                    Object.keys(permissionList).map((groupName, groupItem) => {
                        return (
                            <div key={groupName} className="m-1.5">
                                <div className="rounded-md bg-secondary p-1.5 shadow-md">
                                    <div className="mb-1 border-b-2 pb-1 font-medium capitalize text-base-500">
                                        {StringReplace(groupName, "_", " ")}
                                    </div>
                                    <div className="grid grid-cols-2">
                                        {Object.keys(permissionList[groupName]).map((permItem, permIndex) => {
                                            return (
                                                <div key={`${groupName}_${permIndex}`} className="flex items-center">
                                                    <input
                                                        onChange={(e) => addRemovePermission(e.target.value)}
                                                        id={`${groupName}_${permIndex}`}
                                                        type="checkbox"
                                                        checked={
                                                            userPermissions.indexOf(
                                                                permissionList[groupName][permIndex]["key_name"]
                                                            ) >= 0
                                                        }
                                                        value={permissionList[groupName][permIndex]["key_name"]}
                                                        className="h-4 w-4 rounded-sm border border-primary ring-offset-base-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary"
                                                    />
                                                    <label
                                                        htmlFor={`${groupName}_${permIndex}`}
                                                        className="ml-2 cursor-pointer py-1 pr-2 text-sm font-medium capitalize text-base-400 hover:text-base-500"
                                                    >
                                                        {permissionList[groupName][permIndex]["name"]}
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </ScrollArea>
    );
};
