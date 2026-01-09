const GlassCard = ({ Icon, title, text }) => {
  return (
    <div className="glass-card p-6 rounded-2xl">
      <span><Icon className="h-12 w-12 text-primary mb-4 mx-auto" /></span>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground dark:text-blue-100">{text}</p>
    </div>
  );
};

export default GlassCard;
