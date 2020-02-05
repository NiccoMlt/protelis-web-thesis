# Unibo Tesi

[![Build Status](https://travis-ci.com/NiccoMlt/protelis-web-thesis.svg?branch=master)](https://travis-ci.com/NiccoMlt/protelis-web-thesis)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![made-with-latex](https://img.shields.io/badge/Made%20with-LaTeX-1f425f.svg)](https://www.latex-project.org/)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

## [Requisiti](https://corsi.unibo.it/magistrale/IngegneriaScienzeInformatiche/volume-pdf-e-deposito-online-dellelaborato) e [Norme redazionali](https://corsi.unibo.it/magistrale/IngegneriaScienzeInformatiche/redazione-tesi-voto-finale) della tesi

- È vietato riprodurre il logo dell'Ateneo di Bologna su qualunque parte dell'elaborato;
- il file non dovrà superare i 30Mb;
- pagine di 32-35 righe, ciascuna di 65-70 caratteri di tipo prestabilito (Times New Roman, Arial, Courier o Helvetica);
- lunghezza dell'elaborato compresa fra le 50.000 e le 100.000 battute (spazi inclusi);
- corpo del testo di 12 o 13 punti (le note vanno in corpo 10);
- margini destro-sinistro e superiore-inferiore di 2,5 cm;
- interlinea 1,5 cm;
- frontespizio conforme al [fac-simile](https://corsi.unibo.it/magistrale/IngegneriaScienzeInformatiche/volume-pdf-e-deposito-online-dellelaborato/frontespiziolmisi.pdf/@@download/file/FrontespizioLMISI.pdf);
- figure e tavole in formato UNI (A4 e A3);
- il file deve essere nominato nel modo: `cognome_nome_tesi`;
- formato PDF.

## Dettagli tecnici

Il documento è pensato per essere compilato con il motore **LuaLaTeX** tramite [**arara**](https://github.com/cereda/arara) come _build tool_ e **VisualStudio Code** come _ambiente di lavoro_, grazie all'ausilio del plugin [**LaTeX Workshop**](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop).
Risulta comunque compilabile anche manualmente o su Overleaf; importante è utilizzare il motore **LuaLaTeX** o al limite XeLaTeX (<ins>ma non `pdflatex`!</ins>).

Il documenti utilizza la classe [`scrbook`](https://www.ctan.org/pkg/scrbook) (alternativa della collezione [KOMA-script](https://www.ctan.org/pkg/koma-script) della classe `book`) e definisce una dimensione del testo di 12pt, con margini identici di 2,5cm e interlinea con scartamento 1,5.

Il font utilizzato è il _Latin Modern_ OpenType in tutte le varianti.

Il PDF generato è conforme allo standard PDF/A-1b.

La bibliografia è gestita tramite backend [`biber`](https://ctan.org/pkg/biber) e pacchetto [`biblatex`](https://www.ctan.org/pkg/biblatex);
il database [`biblio.bib`](./biblio.bib) può essere editato a mano o con strumenti come [JabRef](http://www.jabref.org/).

Lo stile scelto per la bibliografia è quello [_IEEE_](https://ctan.org/pkg/biblatex-ieee).

## Licenze e riferimenti

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

Il progetto è stato generato a partire dal [mio template per tesi Unibo](https://github.com/NiccoMlt/Unibo-Tesi-Template), costruito cercando di aderire alle norme redazionali dell'Università di Bologna e alle _best practices_ apprese dalle guide fornite dal [GuIT](https://www.guitex.org/home/it/doc).

Il codice LaTeX personalmente realizzato per la struttura del documento di tesi sono forniti sotto licenza [Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0) in accordo al file [`LICENSE`](./LICENSE) incluso in questo repository.

Il contenuto dell'opera testuale da me personalmente scritto è fornito sotto licenza [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/).
