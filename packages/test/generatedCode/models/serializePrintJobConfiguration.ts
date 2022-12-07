import {PrintJobConfiguration} from './index';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {serializeIntegerRange} from './serializeIntegerRange';
import {serializePrintMargin} from './serializePrintMargin';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintJobConfiguration(writer: SerializationWriter, printJobConfiguration: PrintJobConfiguration | undefined = {}) : void {
            writer.writeBooleanValue("collate", printJobConfiguration.collate);
            writer.writeEnumValue<PrintColorMode>("colorMode", printJobConfiguration.colorMode);
            writer.writeNumberValue("copies", printJobConfiguration.copies);
            writer.writeNumberValue("dpi", printJobConfiguration.dpi);
            writer.writeEnumValue<PrintDuplexMode>("duplexMode", printJobConfiguration.duplexMode);
            writer.writeEnumValue<PrinterFeedOrientation>("feedOrientation", printJobConfiguration.feedOrientation);
            //writer.writeEnumValue<PrintFinishing>("finishings", printJobConfiguration.finishings);
            writer.writeBooleanValue("fitPdfToPage", printJobConfiguration.fitPdfToPage);
            writer.writeStringValue("inputBin", printJobConfiguration.inputBin);
            writer.writeObjectValueFromMethod("margin", printJobConfiguration.margin as any, serializePrintMargin);
            writer.writeStringValue("mediaSize", printJobConfiguration.mediaSize);
            writer.writeStringValue("mediaType", printJobConfiguration.mediaType);
            writer.writeEnumValue<PrintMultipageLayout>("multipageLayout", printJobConfiguration.multipageLayout);
            writer.writeEnumValue<PrintOrientation>("orientation", printJobConfiguration.orientation);
            writer.writeStringValue("outputBin", printJobConfiguration.outputBin);
            writer.writeCollectionOfObjectValuesFromMethod("pageRanges", printJobConfiguration.pageRanges as any, serializeIntegerRange);
            writer.writeNumberValue("pagesPerSheet", printJobConfiguration.pagesPerSheet);
            writer.writeEnumValue<PrintQuality>("quality", printJobConfiguration.quality);
            writer.writeEnumValue<PrintScaling>("scaling", printJobConfiguration.scaling);
}
