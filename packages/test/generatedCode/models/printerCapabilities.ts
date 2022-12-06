import {IntegerRange} from './index';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterCapabilities extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A list of supported bottom margins(in microns) for the printer. */
    bottomMargins?: number[];
    /** True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise. */
    collation?: boolean;
    /** The color modes supported by the printer. Valid values are described in the following table. */
    colorModes?: PrintColorMode[];
    /** A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print service supports printing all of these MIME types. */
    contentTypes?: string[];
    /** The range of copies per job supported by the printer. */
    copiesPerJob?: IntegerRange;
    /** The list of print resolutions in DPI that are supported by the printer. */
    dpis?: number[];
    /** The list of duplex modes that are supported by the printer. Valid values are described in the following table. */
    duplexModes?: PrintDuplexMode[];
    /** The list of feed orientations that are supported by the printer. */
    feedOrientations?: PrinterFeedOrientation[];
    /** Finishing processes the printer supports for a printed document. */
    finishings?: PrintFinishing[];
    /** Supported input bins for the printer. */
    inputBins?: string[];
    /** True if color printing is supported by the printer; false otherwise. Read-only. */
    isColorPrintingSupported?: boolean;
    /** True if the printer supports printing by page ranges; false otherwise. */
    isPageRangeSupported?: boolean;
    /** A list of supported left margins(in microns) for the printer. */
    leftMargins?: number[];
    /** The media (i.e., paper) colors supported by the printer. */
    mediaColors?: string[];
    /** The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are in the following table. */
    mediaSizes?: string[];
    /** The media types supported by the printer. */
    mediaTypes?: string[];
    /** The presentation directions supported by the printer. Supported values are described in the following table. */
    multipageLayouts?: PrintMultipageLayout[];
    /** The OdataType property */
    odataType?: string;
    /** The print orientations supported by the printer. Valid values are described in the following table. */
    orientations?: PrintOrientation[];
    /** The printer's supported output bins (trays). */
    outputBins?: string[];
    /** Supported number of Input Pages to impose upon a single Impression. */
    pagesPerSheet?: number[];
    /** The print qualities supported by the printer. */
    qualities?: PrintQuality[];
    /** A list of supported right margins(in microns) for the printer. */
    rightMargins?: number[];
    /** Supported print scalings. */
    scalings?: PrintScaling[];
    /** True if the printer supports scaling PDF pages to match the print media size; false otherwise. */
    supportsFitPdfToPage?: boolean;
    /** A list of supported top margins(in microns) for the printer. */
    topMargins?: number[];
}
