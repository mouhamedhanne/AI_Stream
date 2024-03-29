export default function page() {
  return (
    <div className="flex w-full flex-col items-center gap-6 bg-background px-4 py-8 text-foreground lg:p-16">
      <span
        className="inline-flex items-center rounded-md font-medium 
            forced-colors:outline bg-orange-500/15 text-orange-700 
            group-data-[hover]:bg-orange-500/25 dark:bg-orange-500/10 
            dark:text-orange-400 dark:group-data-[hover]:bg-orange-500/20 
            px-1.5 py-0.5 text-sm/5 sm:text-xs/5 gap-x-1.5"
      >
        Passe à l'action ⚡️
      </span>
    </div>
  );
}
