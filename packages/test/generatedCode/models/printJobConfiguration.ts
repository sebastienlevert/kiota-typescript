import {IntegerRange, PrintMargin} from './index';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintJobConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Whether the printer should collate pages wehen printing multiple copies of a multi-page document. */
    collate?: boolean;
    /** The colorMode property */
    colorMode?: PrintColorMode;
    /** The number of copies that should be printed. Read-only. */
    copies?: number;
    /** The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only. */
    dpi?: number;
    /** The duplexMode property */
    duplexMode?: PrintDuplexMode;
    /** The feedOrientation property */
    feedOrientation?: PrinterFeedOrientation;
    /** Finishing processes to use when printing. */
    finishings?: PrintFinishing[];
    /** The fitPdfToPage property */
    fitPdfToPage?: boolean;
    /** The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins. */
    inputBin?: string;
    /** The margin property */
    margin?: PrintMargin;
    /** The media sizeto use when printing. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic. */
    mediaSize?: string;
    /** The default media (such as paper) type to print the document on. */
    mediaType?: string;
    /** The multipageLayout property */
    multipageLayout?: PrintMultipageLayout;
    /** The orientation property */
    orientation?: PrintOrientation;
    /** The output bin to place completed prints into. See the printer's capabilities for a list of supported output bins. */
    outputBin?: string;
    /** The page ranges to print. Read-only. */
    pageRanges?: IntegerRange[];
    /** The number of document pages to print on each sheet. */
    pagesPerSheet?: number;
    /** The quality property */
    quality?: PrintQuality;
    /** The scaling property */
    scaling?: PrintScaling;
}
