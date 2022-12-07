import {IntegerRange, PrintMargin} from './index';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedDirection} from './printerFeedDirection';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterDocumentConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The collate property */
    collate?: boolean;
    /** The colorMode property */
    colorMode?: PrintColorMode;
    /** The copies property */
    copies?: number;
    /** The dpi property */
    dpi?: number;
    /** The duplexMode property */
    duplexMode?: PrintDuplexMode;
    /** The feedDirection property */
    feedDirection?: PrinterFeedDirection;
    /** The feedOrientation property */
    feedOrientation?: PrinterFeedOrientation;
    /** The finishings property */
    finishings?: PrintFinishing[];
    /** The fitPdfToPage property */
    fitPdfToPage?: boolean;
    /** The inputBin property */
    inputBin?: string;
    /** The margin property */
    margin?: PrintMargin;
    /** The mediaSize property */
    mediaSize?: string;
    /** The mediaType property */
    mediaType?: string;
    /** The multipageLayout property */
    multipageLayout?: PrintMultipageLayout;
    /** The orientation property */
    orientation?: PrintOrientation;
    /** The outputBin property */
    outputBin?: string;
    /** The pageRanges property */
    pageRanges?: IntegerRange[];
    /** The pagesPerSheet property */
    pagesPerSheet?: number;
    /** The quality property */
    quality?: PrintQuality;
    /** The scaling property */
    scaling?: PrintScaling;
}
