from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.user_id == request.user


class WriteOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        WRITE_METHODS = ["POST", ]

        return request.method in WRITE_METHODS
