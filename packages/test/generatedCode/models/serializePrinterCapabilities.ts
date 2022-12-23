import {PrinterCapabilities} from './index';
import {PrintColorConfiguration} from './printColorConfiguration';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexConfiguration} from './printDuplexConfiguration';
import {PrintDuplexMode} from './printDuplexMode';
import {PrinterFeedDirection} from './printerFeedDirection';
import {PrinterFeedOrientation} from './printerFeedOrientation';
import {PrintFinishing} from './printFinishing';
import {PrintMediaType} from './printMediaType';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintPresentationDirection} from './printPresentationDirection';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {serializeIntegerRange} from './serializeIntegerRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterCapabilities(writer: SerializationWriter, printerCapabilities: PrinterCapabilities | undefined = {}) : void {
            // writer.writeCollectionOfPrimitiveValues<number>("bottomMargins", printerCapabilities.bottomMargins);
            // writer.writeBooleanValue("collation", printerCapabilities.collation);
            // writer.writeEnumValue<PrintColorMode>("colorModes", printerCapabilities.colorModes);
            // writer.writeCollectionOfPrimitiveValues<string>("contentTypes", printerCapabilities.contentTypes);
            // writer.writeObjectValueFromMethod("copiesPerJob", printerCapabilities.copiesPerJob as any, serializeIntegerRange);
            // writer.writeCollectionOfPrimitiveValues<number>("dpis", printerCapabilities.dpis);
            // writer.writeEnumValue<PrintDuplexMode>("duplexModes", printerCapabilities.duplexModes);
            // writer.writeEnumValue<PrinterFeedDirection>("feedDirections", printerCapabilities.feedDirections);
            // writer.writeEnumValue<PrinterFeedOrientation>("feedOrientations", printerCapabilities.feedOrientations);
            // writer.writeEnumValue<PrintFinishing>("finishings", printerCapabilities.finishings);
            // writer.writeCollectionOfPrimitiveValues<string>("inputBins", printerCapabilities.inputBins);
            // writer.writeBooleanValue("isColorPrintingSupported", printerCapabilities.isColorPrintingSupported);
            // writer.writeBooleanValue("isPageRangeSupported", printerCapabilities.isPageRangeSupported);
            // writer.writeCollectionOfPrimitiveValues<number>("leftMargins", printerCapabilities.leftMargins);
            // writer.writeCollectionOfPrimitiveValues<string>("mediaColors", printerCapabilities.mediaColors);
            // writer.writeCollectionOfPrimitiveValues<string>("mediaSizes", printerCapabilities.mediaSizes);
            // writer.writeCollectionOfPrimitiveValues<string>("mediaTypes", printerCapabilities.mediaTypes);
            // writer.writeEnumValue<PrintMultipageLayout>("multipageLayouts", printerCapabilities.multipageLayouts);
            // writer.writeEnumValue<PrintOrientation>("orientations", printerCapabilities.orientations);
            // writer.writeCollectionOfPrimitiveValues<string>("outputBins", printerCapabilities.outputBins);
            // writer.writeCollectionOfPrimitiveValues<number>("pagesPerSheet", printerCapabilities.pagesPerSheet);
            // writer.writeEnumValue<PrintQuality>("qualities", printerCapabilities.qualities);
            // writer.writeCollectionOfPrimitiveValues<number>("rightMargins", printerCapabilities.rightMargins);
            // writer.writeEnumValue<PrintScaling>("scalings", printerCapabilities.scalings);
            // writer.writeEnumValue<PrintColorConfiguration>("supportedColorConfigurations", printerCapabilities.supportedColorConfigurations);
            // writer.writeObjectValueFromMethod("supportedCopiesPerJob", printerCapabilities.supportedCopiesPerJob as any, serializeIntegerRange);
            // writer.writeCollectionOfPrimitiveValues<string>("supportedDocumentMimeTypes", printerCapabilities.supportedDocumentMimeTypes);
            // writer.writeEnumValue<PrintDuplexConfiguration>("supportedDuplexConfigurations", printerCapabilities.supportedDuplexConfigurations);
            // writer.writeEnumValue<PrintFinishing>("supportedFinishings", printerCapabilities.supportedFinishings);
            // writer.writeCollectionOfPrimitiveValues<string>("supportedMediaColors", printerCapabilities.supportedMediaColors);
            // writer.writeCollectionOfPrimitiveValues<string>("supportedMediaSizes", printerCapabilities.supportedMediaSizes);
            // writer.writeEnumValue<PrintMediaType>("supportedMediaTypes", printerCapabilities.supportedMediaTypes);
            // writer.writeEnumValue<PrintOrientation>("supportedOrientations", printerCapabilities.supportedOrientations);
            // writer.writeCollectionOfPrimitiveValues<string>("supportedOutputBins", printerCapabilities.supportedOutputBins);
            // writer.writeObjectValueFromMethod("supportedPagesPerSheet", printerCapabilities.supportedPagesPerSheet as any, serializeIntegerRange);
            // writer.writeEnumValue<PrintPresentationDirection>("supportedPresentationDirections", printerCapabilities.supportedPresentationDirections);
            // writer.writeEnumValue<PrintQuality>("supportedPrintQualities", printerCapabilities.supportedPrintQualities);
            // writer.writeBooleanValue("supportsFitPdfToPage", printerCapabilities.supportsFitPdfToPage);
            // writer.writeCollectionOfPrimitiveValues<number>("topMargins", printerCapabilities.topMargins);
}