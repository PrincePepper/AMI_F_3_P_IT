from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.IsAuthenticated):

    def has_object_permission(self, request, view, obj):
        METHODS = ["POST", 'GET', 'HEAD', 'OPTIONS', ]

        if request.method in METHODS:
            return True
        return obj.user_id == request.user


class WriteOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        WRITE_METHODS = ["POST", ]

        return request.method in WRITE_METHODS


class ReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        WRITE_METHODS = ["GET", ]

        return request.method in WRITE_METHODS
