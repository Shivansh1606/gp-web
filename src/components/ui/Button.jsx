export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  ...props 
}) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base", 
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
