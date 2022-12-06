import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterDefaults extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The default color mode to use when printing the document. Valid values are described in the following table. */
    colorMode?: PrintColorMode;
    /** The default content (MIME) type to use when processing documents. */
    contentType?: string;
    /** The default number of copies printed per job. */
    copiesPerJob?: number;
    /** The default resolution in DPI to use when printing the job. */
    dpi?: number;
    /** The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the following table. */
    duplexMode?: PrintDuplexMode;
    /** The default set of finishings to apply to print jobs. Valid values are described in the following table. */
    finishings?: PrintFinishing[];
    /** The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions. */
    fitPdfToPage?: boolean;
    /** The inputBin property */
    inputBin?: string;
    /** The default media (such as paper) color to print the document on. */
    mediaColor?: string;
    /** The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic. */
    mediaSize?: string;
    /** The default media (such as paper) type to print the document on. */
    mediaType?: string;
    /** The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table. */
    multipageLayout?: PrintMultipageLayout;
    /** The OdataType property */
    odataType?: string;
    /** The default orientation to use when printing the document. Valid values are described in the following table. */
    orientation?: PrintOrientation;
    /** The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins. */
    outputBin?: string;
    /** The default number of document pages to print on each sheet. */
    pagesPerSheet?: number;
    /** The default quality to use when printing the document. Valid values are described in the following table. */
    quality?: PrintQuality;
    /** Specifies how the printer scales the document data to fit the requested media. Valid values are described in the following table. */
    scaling?: PrintScaling;
}
