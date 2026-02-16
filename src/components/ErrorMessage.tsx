interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border-2 border-red-100 rounded-xl p-4 mb-6">
      <p className="text-red-600 text-center font-medium">
        {message}
      </p>
    </div>
  );
}
