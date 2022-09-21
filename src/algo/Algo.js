
const triggerWords = [
    { question: 'honey bunny', answer: `Hmm, I can't seem to find anything on a Honey Bunny` },
    { question: 'reverand laurence', answer: `Hmm, I can't seem to find anything on a Reverand Laurence` },
    { question: 'laurence', answer: `Do you have a last name for me?` },
    { question: 'piotr', answer: `Do you by any chance have Piotr's last name?` },
    { question: 'piotr ivanovich', answer: "Oh our Piotr! We know him. He has had multiple run-ins with law enforcement and was in jail for a week when Jimmy was murdered. He has an alibi."},
    { question: 'harry', answer: `Do you by any chance have Harry's last name?` },
    { question: 'harry neeson', answer: `Hm, Harry Neeson seems like an ordinary fellow. Do you want to go and talk to him?`, interaction: true, navigation: "/evidence"},
    { question: 'buffy', answer: `Do you by any chance have Buffy's last name?` },
    { question: 'buffy silvara', answer: `We got a result here! Do you want to go speak to her?`, interaction: true },
    { question: 'jacob', answer: `Do you by any chance have Jacob's last name?` },
    { question: 'jacob brandson', answer: 'Oh, he is registered as >deceased<. He was involved in some shady things and disappeared in 2007.' },
    { question: 'iris', answer: `Do you by any chance have Iris' last name?` },
    { question: 'iris brandson', answer: "Oh, that is a sweet lady. Jimmy's Mom. Do you want to talk to her?", interaction: true },
    { question: 'annamae', answer: `Do you by any chance have Anna-Mae's  last name?` },
    { question: 'anna-mae', answer: `Do you by any chance have Anna-Mae's last name?` },
    { question: 'anna', answer: `Do you by any chance have her last name?` },
    { question: 'anna clarkson', answer: "Hmm, does this suspect maybe have a middle name?" },
    { question: 'anna-mae clarkson', answer: "Detective! This seems like the missing puzzle piece. We were able to find a person with that name that is missing and our experts are trying to hack her e-mail account for more information." },
    { question: 'bar 66', answer: `Bar 66... we know this bar.`, interaction: true },
    { question: 'dna', answer: "Would you like to have a DNA test ran on the body of the deceased to assess that the deceased is in fact Jimmy Brandson?", showDnaResult: true}
]

export { triggerWords };