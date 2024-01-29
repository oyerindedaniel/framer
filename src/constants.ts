export const tabs = [
    {
      label: "JOB PERK 01",
      content: [{name: "EPIC LOOT", variant:  {
        initial: {
          rotate: -2,
          opacity: 0,
          y: 108
        },
        animate: {rotate: 2, opacity: 1, y: 0, transition: { type: "spring",  duration: .55, } },
        exit: {rotate: -3, opacity: 0, y: 108, transition: { type: "spring",  duration: .55, } }
      }}, {name: "FROM", variant:  {
        initial: {
            rotate: 0,
          opacity: 0,
          y: 54,
        },
        animate: { rotate: 1, opacity: 1, y: 0, transition: { type: "spring",  duration: .35, } },
        exit: {rotate: -1, opacity: 0, y: 104, transition: { type: "spring",  duration: .35, } }
      }}, {name:"DANGEROUS", variant: {
        initial: {
          rotate: 3,
          opacity: 0,
          y: 106,
        },
        animate: {rotate: -2, opacity: 1, y: 0, transition: { type: "spring",  duration: .75, } },
        exit: {rotate: 2, opacity: 0, y: 106, transition: { type: "spring",  duration: .75, } }
      }}, {name: "BOSSES", variant: {
        initial: {
          rotate: 0,
          opacity: 0,
          y: 102,
        },
        animate: {rotate: 2, opacity: 1, y: 0, transition: { type: "spring",  duration: .5, } },
        exit: {rotate: -1, opacity: 0, y: 102, transition: { type: "spring",  duration: .5, } }
      }}] as const,
      className: "bg-blue-500",
    },
    {
      label: "JOB PERK 02",
      content: [{name: "UNLIMITED", variant:  {
        initial: {
          rotate: -2,
          opacity: 0,
          y: 108,
        },
        animate: {rotate: 2, opacity: 1, y: 0, transition: { type: "spring",  duration: .55, } },
        exit: {rotate: -3, opacity: 0, y: 108, transition: { type: "spring",  duration: .55, } }
      }}, {name: "TRAVEL TO", variant:  {
        initial: {
            rotate: 0,
          opacity: 0,
          y: 54,
        },
        animate: { rotate: 1, opacity: 1, y: 0, transition: { type: "spring",  duration: .35, } },
        exit: {rotate: -1, opacity: 0, y: 104, transition: { type: "spring",  duration: .35, } }
      }}, {name:"BEAUTIFUL", variant: {
        initial: {
          rotate: 3,
          opacity: 0,
          y: 106,
        },
        animate: {rotate: -2, opacity: 1, y: 0, transition: { type: "spring",  duration: .75, } },
        exit: {rotate: 2, opacity: 0, y: 106, transition: { type: "spring",  duration: .75, } }
      }}, {name: "PARALLEL WORLDS", variant: {
        initial: {
          rotate: 0,
          opacity: 0,
          y: 102,
        },
        animate: {rotate: 2, opacity: 1, y: 0, transition: { type: "spring",  duration: .5, } },
        exit: {rotate: -1, opacity: 0, y: 102, transition: { type: "spring",  duration: .5, } }
      }}] as const,
      className: "bg-green-500",
    },
  ] as const;
  

  