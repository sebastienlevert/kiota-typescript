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
    /** The color mode the printer should use to print the job. Valid values are described in the table below. Read-only. */
    colorMode?: PrintColorMode;
    /** The number of copies that should be printed. Read-only. */
    copies?: number;
    /** The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only. */
    dpi?: number;
    /** The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only. */
    duplexMode?: PrintDuplexMode;
    /** The orientation to use when feeding media into the printer. Valid values are described in the following table. Read-only. */
    feedOrientation?: PrinterFeedOrientation;
    /** Finishing processes to use when printing. */
    finishings?: PrintFinishing[];
    /** The fitPdfToPage property */
    fitPdfToPage?: boolean;
    /** The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins. */
    inputBin?: string;
    /** The margin settings to use when printing. */
    margin?: PrintMargin;
    /** The media size to use when printing. Supports standard size names for ISO and ANSI media sizes. Valid values listed in the printerCapabilities topic. */
    mediaSize?: string;
    /** The default media (such as paper) type to print the document on. */
    mediaType?: string;
    /** The direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table. */
    multipageLayout?: PrintMultipageLayout;
    /** The OdataType property */
    odataType?: string;
    /** The orientation setting the printer should use when printing the job. Valid values are described in the following table. */
    orientation?: PrintOrientation;
    /** The output bin to place completed prints into. See the printer's capabilities for a list of supported output bins. */
    outputBin?: string;
    /** The page ranges to print. Read-only. */
    pageRanges?: IntegerRange[];
    /** The number of document pages to print on each sheet. */
    pagesPerSheet?: number;
    /** The print quality to use when printing the job. Valid values are described in the table below. Read-only. */
    quality?: PrintQuality;
    /** Specifies how the printer should scale the document data to fit the requested media. Valid values are described in the following table. */
    scaling?: PrintScaling;
}
