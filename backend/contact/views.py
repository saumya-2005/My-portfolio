from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactSerializer

@api_view(['POST'])
def submit_contact(request):
    serializer = ContactSerializer(data=request.data)  # ✅ FIX HERE

    if serializer.is_valid():
        serializer.save()   # DB me save karega
        return Response(
            {"message": "Message submitted successfully"},
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



