import {createIntegerRangeFromDiscriminatorValue} from './createIntegerRangeFromDiscriminatorValue';
import {IntegerRange} from './index';
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
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterCapabilities implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A list of supported bottom margins(in microns) for the printer. */
    private _bottomMargins?: number[] | undefined;
    /** True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise. */
    private _collation?: boolean | undefined;
    /** The color modes supported by the printer. Valid values are described in the following table. */
    private _colorModes?: PrintColorMode[] | undefined;
    /** A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print service supports printing all of these MIME types. */
    private _contentTypes?: string[] | undefined;
    /** The copiesPerJob property */
    private _copiesPerJob?: IntegerRange | undefined;
    /** The list of print resolutions in DPI that are supported by the printer. */
    private _dpis?: number[] | undefined;
    /** The list of duplex modes that are supported by the printer. Valid values are described in the following table. */
    private _duplexModes?: PrintDuplexMode[] | undefined;
    /** The feedDirections property */
    private _feedDirections?: PrinterFeedDirection[] | undefined;
    /** The list of feed orientations that are supported by the printer. */
    private _feedOrientations?: PrinterFeedOrientation[] | undefined;
    /** Finishing processes the printer supports for a printed document. */
    private _finishings?: PrintFinishing[] | undefined;
    /** Supported input bins for the printer. */
    private _inputBins?: string[] | undefined;
    /** True if color printing is supported by the printer; false otherwise. Read-only. */
    private _isColorPrintingSupported?: boolean | undefined;
    /** True if the printer supports printing by page ranges; false otherwise. */
    private _isPageRangeSupported?: boolean | undefined;
    /** A list of supported left margins(in microns) for the printer. */
    private _leftMargins?: number[] | undefined;
    /** The media (i.e., paper) colors supported by the printer. */
    private _mediaColors?: string[] | undefined;
    /** The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are in the following table. */
    private _mediaSizes?: string[] | undefined;
    /** The media types supported by the printer. */
    private _mediaTypes?: string[] | undefined;
    /** The presentation directions supported by the printer. Supported values are described in the following table. */
    private _multipageLayouts?: PrintMultipageLayout[] | undefined;
    /** The print orientations supported by the printer. Valid values are described in the following table. */
    private _orientations?: PrintOrientation[] | undefined;
    /** The printer's supported output bins (trays). */
    private _outputBins?: string[] | undefined;
    /** Supported number of Input Pages to impose upon a single Impression. */
    private _pagesPerSheet?: number[] | undefined;
    /** The print qualities supported by the printer. */
    private _qualities?: PrintQuality[] | undefined;
    /** A list of supported right margins(in microns) for the printer. */
    private _rightMargins?: number[] | undefined;
    /** Supported print scalings. */
    private _scalings?: PrintScaling[] | undefined;
    /** The supportedColorConfigurations property */
    private _supportedColorConfigurations?: PrintColorConfiguration[] | undefined;
    /** The supportedCopiesPerJob property */
    private _supportedCopiesPerJob?: IntegerRange | undefined;
    /** The supportedDocumentMimeTypes property */
    private _supportedDocumentMimeTypes?: string[] | undefined;
    /** The supportedDuplexConfigurations property */
    private _supportedDuplexConfigurations?: PrintDuplexConfiguration[] | undefined;
    /** The supportedFinishings property */
    private _supportedFinishings?: PrintFinishing[] | undefined;
    /** The supportedMediaColors property */
    private _supportedMediaColors?: string[] | undefined;
    /** The supportedMediaSizes property */
    private _supportedMediaSizes?: string[] | undefined;
    /** The supportedMediaTypes property */
    private _supportedMediaTypes?: PrintMediaType[] | undefined;
    /** The supportedOrientations property */
    private _supportedOrientations?: PrintOrientation[] | undefined;
    /** The supportedOutputBins property */
    private _supportedOutputBins?: string[] | undefined;
    /** The supportedPagesPerSheet property */
    private _supportedPagesPerSheet?: IntegerRange | undefined;
    /** The supportedPresentationDirections property */
    private _supportedPresentationDirections?: PrintPresentationDirection[] | undefined;
    /** The supportedPrintQualities property */
    private _supportedPrintQualities?: PrintQuality[] | undefined;
    /** True if the printer supports scaling PDF pages to match the print media size; false otherwise. */
    private _supportsFitPdfToPage?: boolean | undefined;
    /** A list of supported top margins(in microns) for the printer. */
    private _topMargins?: number[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the bottomMargins property value. A list of supported bottom margins(in microns) for the printer.
     * @returns a integer
     */
    public get bottomMargins() {
        return this._bottomMargins;
    };
    /**
     * Sets the bottomMargins property value. A list of supported bottom margins(in microns) for the printer.
     * @param value Value to set for the bottomMargins property.
     */
    public set bottomMargins(value: number[] | undefined) {
        this._bottomMargins = value;
    };
    /**
     * Gets the collation property value. True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise.
     * @returns a boolean
     */
    public get collation() {
        return this._collation;
    };
    /**
     * Sets the collation property value. True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise.
     * @param value Value to set for the collation property.
     */
    public set collation(value: boolean | undefined) {
        this._collation = value;
    };
    /**
     * Gets the colorModes property value. The color modes supported by the printer. Valid values are described in the following table.
     * @returns a printColorMode
     */
    public get colorModes() {
        return this._colorModes;
    };
    /**
     * Sets the colorModes property value. The color modes supported by the printer. Valid values are described in the following table.
     * @param value Value to set for the colorModes property.
     */
    public set colorModes(value: PrintColorMode[] | undefined) {
        this._colorModes = value;
    };
    /**
     * Instantiates a new printerCapabilities and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the contentTypes property value. A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print service supports printing all of these MIME types.
     * @returns a string
     */
    public get contentTypes() {
        return this._contentTypes;
    };
    /**
     * Sets the contentTypes property value. A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print service supports printing all of these MIME types.
     * @param value Value to set for the contentTypes property.
     */
    public set contentTypes(value: string[] | undefined) {
        this._contentTypes = value;
    };
    /**
     * Gets the copiesPerJob property value. The copiesPerJob property
     * @returns a integerRange
     */
    public get copiesPerJob() {
        return this._copiesPerJob;
    };
    /**
     * Sets the copiesPerJob property value. The copiesPerJob property
     * @param value Value to set for the copiesPerJob property.
     */
    public set copiesPerJob(value: IntegerRange | undefined) {
        this._copiesPerJob = value;
    };
    /**
     * Gets the dpis property value. The list of print resolutions in DPI that are supported by the printer.
     * @returns a integer
     */
    public get dpis() {
        return this._dpis;
    };
    /**
     * Sets the dpis property value. The list of print resolutions in DPI that are supported by the printer.
     * @param value Value to set for the dpis property.
     */
    public set dpis(value: number[] | undefined) {
        this._dpis = value;
    };
    /**
     * Gets the duplexModes property value. The list of duplex modes that are supported by the printer. Valid values are described in the following table.
     * @returns a printDuplexMode
     */
    public get duplexModes() {
        return this._duplexModes;
    };
    /**
     * Sets the duplexModes property value. The list of duplex modes that are supported by the printer. Valid values are described in the following table.
     * @param value Value to set for the duplexModes property.
     */
    public set duplexModes(value: PrintDuplexMode[] | undefined) {
        this._duplexModes = value;
    };
    /**
     * Gets the feedDirections property value. The feedDirections property
     * @returns a printerFeedDirection
     */
    public get feedDirections() {
        return this._feedDirections;
    };
    /**
     * Sets the feedDirections property value. The feedDirections property
     * @param value Value to set for the feedDirections property.
     */
    public set feedDirections(value: PrinterFeedDirection[] | undefined) {
        this._feedDirections = value;
    };
    /**
     * Gets the feedOrientations property value. The list of feed orientations that are supported by the printer.
     * @returns a printerFeedOrientation
     */
    public get feedOrientations() {
        return this._feedOrientations;
    };
    /**
     * Sets the feedOrientations property value. The list of feed orientations that are supported by the printer.
     * @param value Value to set for the feedOrientations property.
     */
    public set feedOrientations(value: PrinterFeedOrientation[] | undefined) {
        this._feedOrientations = value;
    };
    /**
     * Gets the finishings property value. Finishing processes the printer supports for a printed document.
     * @returns a printFinishing
     */
    public get finishings() {
        return this._finishings;
    };
    /**
     * Sets the finishings property value. Finishing processes the printer supports for a printed document.
     * @param value Value to set for the finishings property.
     */
    public set finishings(value: PrintFinishing[] | undefined) {
        this._finishings = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bottomMargins": n => { this.bottomMargins = n.getCollectionOfPrimitiveValues<number>(); },
            "collation": n => { this.collation = n.getBooleanValue(); },
            "colorModes": n => { this.colorModes = n.getEnumValues<PrintColorMode>(PrintColorMode); },
            "contentTypes": n => { this.contentTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "copiesPerJob": n => { this.copiesPerJob = n.getObjectValue<IntegerRange>(createIntegerRangeFromDiscriminatorValue); },
            "dpis": n => { this.dpis = n.getCollectionOfPrimitiveValues<number>(); },
            "duplexModes": n => { this.duplexModes = n.getEnumValues<PrintDuplexMode>(PrintDuplexMode); },
            "feedDirections": n => { this.feedDirections = n.getEnumValues<PrinterFeedDirection>(PrinterFeedDirection); },
            "feedOrientations": n => { this.feedOrientations = n.getEnumValues<PrinterFeedOrientation>(PrinterFeedOrientation); },
            "finishings": n => { this.finishings = n.getEnumValues<PrintFinishing>(PrintFinishing); },
            "inputBins": n => { this.inputBins = n.getCollectionOfPrimitiveValues<string>(); },
            "isColorPrintingSupported": n => { this.isColorPrintingSupported = n.getBooleanValue(); },
            "isPageRangeSupported": n => { this.isPageRangeSupported = n.getBooleanValue(); },
            "leftMargins": n => { this.leftMargins = n.getCollectionOfPrimitiveValues<number>(); },
            "mediaColors": n => { this.mediaColors = n.getCollectionOfPrimitiveValues<string>(); },
            "mediaSizes": n => { this.mediaSizes = n.getCollectionOfPrimitiveValues<string>(); },
            "mediaTypes": n => { this.mediaTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "multipageLayouts": n => { this.multipageLayouts = n.getEnumValues<PrintMultipageLayout>(PrintMultipageLayout); },
            "orientations": n => { this.orientations = n.getEnumValues<PrintOrientation>(PrintOrientation); },
            "outputBins": n => { this.outputBins = n.getCollectionOfPrimitiveValues<string>(); },
            "pagesPerSheet": n => { this.pagesPerSheet = n.getCollectionOfPrimitiveValues<number>(); },
            "qualities": n => { this.qualities = n.getEnumValues<PrintQuality>(PrintQuality); },
            "rightMargins": n => { this.rightMargins = n.getCollectionOfPrimitiveValues<number>(); },
            "scalings": n => { this.scalings = n.getEnumValues<PrintScaling>(PrintScaling); },
            "supportedColorConfigurations": n => { this.supportedColorConfigurations = n.getEnumValues<PrintColorConfiguration>(PrintColorConfiguration); },
            "supportedCopiesPerJob": n => { this.supportedCopiesPerJob = n.getObjectValue<IntegerRange>(createIntegerRangeFromDiscriminatorValue); },
            "supportedDocumentMimeTypes": n => { this.supportedDocumentMimeTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "supportedDuplexConfigurations": n => { this.supportedDuplexConfigurations = n.getEnumValues<PrintDuplexConfiguration>(PrintDuplexConfiguration); },
            "supportedFinishings": n => { this.supportedFinishings = n.getEnumValues<PrintFinishing>(PrintFinishing); },
            "supportedMediaColors": n => { this.supportedMediaColors = n.getCollectionOfPrimitiveValues<string>(); },
            "supportedMediaSizes": n => { this.supportedMediaSizes = n.getCollectionOfPrimitiveValues<string>(); },
            "supportedMediaTypes": n => { this.supportedMediaTypes = n.getEnumValues<PrintMediaType>(PrintMediaType); },
            "supportedOrientations": n => { this.supportedOrientations = n.getEnumValues<PrintOrientation>(PrintOrientation); },
            "supportedOutputBins": n => { this.supportedOutputBins = n.getCollectionOfPrimitiveValues<string>(); },
            "supportedPagesPerSheet": n => { this.supportedPagesPerSheet = n.getObjectValue<IntegerRange>(createIntegerRangeFromDiscriminatorValue); },
            "supportedPresentationDirections": n => { this.supportedPresentationDirections = n.getEnumValues<PrintPresentationDirection>(PrintPresentationDirection); },
            "supportedPrintQualities": n => { this.supportedPrintQualities = n.getEnumValues<PrintQuality>(PrintQuality); },
            "supportsFitPdfToPage": n => { this.supportsFitPdfToPage = n.getBooleanValue(); },
            "topMargins": n => { this.topMargins = n.getCollectionOfPrimitiveValues<number>(); },
        };
    };
    /**
     * Gets the inputBins property value. Supported input bins for the printer.
     * @returns a string
     */
    public get inputBins() {
        return this._inputBins;
    };
    /**
     * Sets the inputBins property value. Supported input bins for the printer.
     * @param value Value to set for the inputBins property.
     */
    public set inputBins(value: string[] | undefined) {
        this._inputBins = value;
    };
    /**
     * Gets the isColorPrintingSupported property value. True if color printing is supported by the printer; false otherwise. Read-only.
     * @returns a boolean
     */
    public get isColorPrintingSupported() {
        return this._isColorPrintingSupported;
    };
    /**
     * Sets the isColorPrintingSupported property value. True if color printing is supported by the printer; false otherwise. Read-only.
     * @param value Value to set for the isColorPrintingSupported property.
     */
    public set isColorPrintingSupported(value: boolean | undefined) {
        this._isColorPrintingSupported = value;
    };
    /**
     * Gets the isPageRangeSupported property value. True if the printer supports printing by page ranges; false otherwise.
     * @returns a boolean
     */
    public get isPageRangeSupported() {
        return this._isPageRangeSupported;
    };
    /**
     * Sets the isPageRangeSupported property value. True if the printer supports printing by page ranges; false otherwise.
     * @param value Value to set for the isPageRangeSupported property.
     */
    public set isPageRangeSupported(value: boolean | undefined) {
        this._isPageRangeSupported = value;
    };
    /**
     * Gets the leftMargins property value. A list of supported left margins(in microns) for the printer.
     * @returns a integer
     */
    public get leftMargins() {
        return this._leftMargins;
    };
    /**
     * Sets the leftMargins property value. A list of supported left margins(in microns) for the printer.
     * @param value Value to set for the leftMargins property.
     */
    public set leftMargins(value: number[] | undefined) {
        this._leftMargins = value;
    };
    /**
     * Gets the mediaColors property value. The media (i.e., paper) colors supported by the printer.
     * @returns a string
     */
    public get mediaColors() {
        return this._mediaColors;
    };
    /**
     * Sets the mediaColors property value. The media (i.e., paper) colors supported by the printer.
     * @param value Value to set for the mediaColors property.
     */
    public set mediaColors(value: string[] | undefined) {
        this._mediaColors = value;
    };
    /**
     * Gets the mediaSizes property value. The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are in the following table.
     * @returns a string
     */
    public get mediaSizes() {
        return this._mediaSizes;
    };
    /**
     * Sets the mediaSizes property value. The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are in the following table.
     * @param value Value to set for the mediaSizes property.
     */
    public set mediaSizes(value: string[] | undefined) {
        this._mediaSizes = value;
    };
    /**
     * Gets the mediaTypes property value. The media types supported by the printer.
     * @returns a string
     */
    public get mediaTypes() {
        return this._mediaTypes;
    };
    /**
     * Sets the mediaTypes property value. The media types supported by the printer.
     * @param value Value to set for the mediaTypes property.
     */
    public set mediaTypes(value: string[] | undefined) {
        this._mediaTypes = value;
    };
    /**
     * Gets the multipageLayouts property value. The presentation directions supported by the printer. Supported values are described in the following table.
     * @returns a printMultipageLayout
     */
    public get multipageLayouts() {
        return this._multipageLayouts;
    };
    /**
     * Sets the multipageLayouts property value. The presentation directions supported by the printer. Supported values are described in the following table.
     * @param value Value to set for the multipageLayouts property.
     */
    public set multipageLayouts(value: PrintMultipageLayout[] | undefined) {
        this._multipageLayouts = value;
    };
    /**
     * Gets the orientations property value. The print orientations supported by the printer. Valid values are described in the following table.
     * @returns a printOrientation
     */
    public get orientations() {
        return this._orientations;
    };
    /**
     * Sets the orientations property value. The print orientations supported by the printer. Valid values are described in the following table.
     * @param value Value to set for the orientations property.
     */
    public set orientations(value: PrintOrientation[] | undefined) {
        this._orientations = value;
    };
    /**
     * Gets the outputBins property value. The printer's supported output bins (trays).
     * @returns a string
     */
    public get outputBins() {
        return this._outputBins;
    };
    /**
     * Sets the outputBins property value. The printer's supported output bins (trays).
     * @param value Value to set for the outputBins property.
     */
    public set outputBins(value: string[] | undefined) {
        this._outputBins = value;
    };
    /**
     * Gets the pagesPerSheet property value. Supported number of Input Pages to impose upon a single Impression.
     * @returns a integer
     */
    public get pagesPerSheet() {
        return this._pagesPerSheet;
    };
    /**
     * Sets the pagesPerSheet property value. Supported number of Input Pages to impose upon a single Impression.
     * @param value Value to set for the pagesPerSheet property.
     */
    public set pagesPerSheet(value: number[] | undefined) {
        this._pagesPerSheet = value;
    };
    /**
     * Gets the qualities property value. The print qualities supported by the printer.
     * @returns a printQuality
     */
    public get qualities() {
        return this._qualities;
    };
    /**
     * Sets the qualities property value. The print qualities supported by the printer.
     * @param value Value to set for the qualities property.
     */
    public set qualities(value: PrintQuality[] | undefined) {
        this._qualities = value;
    };
    /**
     * Gets the rightMargins property value. A list of supported right margins(in microns) for the printer.
     * @returns a integer
     */
    public get rightMargins() {
        return this._rightMargins;
    };
    /**
     * Sets the rightMargins property value. A list of supported right margins(in microns) for the printer.
     * @param value Value to set for the rightMargins property.
     */
    public set rightMargins(value: number[] | undefined) {
        this._rightMargins = value;
    };
    /**
     * Gets the scalings property value. Supported print scalings.
     * @returns a printScaling
     */
    public get scalings() {
        return this._scalings;
    };
    /**
     * Sets the scalings property value. Supported print scalings.
     * @param value Value to set for the scalings property.
     */
    public set scalings(value: PrintScaling[] | undefined) {
        this._scalings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<number>("bottomMargins", this.bottomMargins);
        writer.writeBooleanValue("collation", this.collation);
        this.colorModes && writer.writeEnumValue<PrintColorMode>("colorModes", ...this.colorModes);
        writer.writeCollectionOfPrimitiveValues<string>("contentTypes", this.contentTypes);
        writer.writeObjectValue<IntegerRange>("copiesPerJob", this.copiesPerJob);
        writer.writeCollectionOfPrimitiveValues<number>("dpis", this.dpis);
        this.duplexModes && writer.writeEnumValue<PrintDuplexMode>("duplexModes", ...this.duplexModes);
        this.feedDirections && writer.writeEnumValue<PrinterFeedDirection>("feedDirections", ...this.feedDirections);
        this.feedOrientations && writer.writeEnumValue<PrinterFeedOrientation>("feedOrientations", ...this.feedOrientations);
        this.finishings && writer.writeEnumValue<PrintFinishing>("finishings", ...this.finishings);
        writer.writeCollectionOfPrimitiveValues<string>("inputBins", this.inputBins);
        writer.writeBooleanValue("isColorPrintingSupported", this.isColorPrintingSupported);
        writer.writeBooleanValue("isPageRangeSupported", this.isPageRangeSupported);
        writer.writeCollectionOfPrimitiveValues<number>("leftMargins", this.leftMargins);
        writer.writeCollectionOfPrimitiveValues<string>("mediaColors", this.mediaColors);
        writer.writeCollectionOfPrimitiveValues<string>("mediaSizes", this.mediaSizes);
        writer.writeCollectionOfPrimitiveValues<string>("mediaTypes", this.mediaTypes);
        this.multipageLayouts && writer.writeEnumValue<PrintMultipageLayout>("multipageLayouts", ...this.multipageLayouts);
        this.orientations && writer.writeEnumValue<PrintOrientation>("orientations", ...this.orientations);
        writer.writeCollectionOfPrimitiveValues<string>("outputBins", this.outputBins);
        writer.writeCollectionOfPrimitiveValues<number>("pagesPerSheet", this.pagesPerSheet);
        this.qualities && writer.writeEnumValue<PrintQuality>("qualities", ...this.qualities);
        writer.writeCollectionOfPrimitiveValues<number>("rightMargins", this.rightMargins);
        this.scalings && writer.writeEnumValue<PrintScaling>("scalings", ...this.scalings);
        this.supportedColorConfigurations && writer.writeEnumValue<PrintColorConfiguration>("supportedColorConfigurations", ...this.supportedColorConfigurations);
        writer.writeObjectValue<IntegerRange>("supportedCopiesPerJob", this.supportedCopiesPerJob);
        writer.writeCollectionOfPrimitiveValues<string>("supportedDocumentMimeTypes", this.supportedDocumentMimeTypes);
        this.supportedDuplexConfigurations && writer.writeEnumValue<PrintDuplexConfiguration>("supportedDuplexConfigurations", ...this.supportedDuplexConfigurations);
        this.supportedFinishings && writer.writeEnumValue<PrintFinishing>("supportedFinishings", ...this.supportedFinishings);
        writer.writeCollectionOfPrimitiveValues<string>("supportedMediaColors", this.supportedMediaColors);
        writer.writeCollectionOfPrimitiveValues<string>("supportedMediaSizes", this.supportedMediaSizes);
        this.supportedMediaTypes && writer.writeEnumValue<PrintMediaType>("supportedMediaTypes", ...this.supportedMediaTypes);
        this.supportedOrientations && writer.writeEnumValue<PrintOrientation>("supportedOrientations", ...this.supportedOrientations);
        writer.writeCollectionOfPrimitiveValues<string>("supportedOutputBins", this.supportedOutputBins);
        writer.writeObjectValue<IntegerRange>("supportedPagesPerSheet", this.supportedPagesPerSheet);
        this.supportedPresentationDirections && writer.writeEnumValue<PrintPresentationDirection>("supportedPresentationDirections", ...this.supportedPresentationDirections);
        this.supportedPrintQualities && writer.writeEnumValue<PrintQuality>("supportedPrintQualities", ...this.supportedPrintQualities);
        writer.writeBooleanValue("supportsFitPdfToPage", this.supportsFitPdfToPage);
        writer.writeCollectionOfPrimitiveValues<number>("topMargins", this.topMargins);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the supportedColorConfigurations property value. The supportedColorConfigurations property
     * @returns a printColorConfiguration
     */
    public get supportedColorConfigurations() {
        return this._supportedColorConfigurations;
    };
    /**
     * Sets the supportedColorConfigurations property value. The supportedColorConfigurations property
     * @param value Value to set for the supportedColorConfigurations property.
     */
    public set supportedColorConfigurations(value: PrintColorConfiguration[] | undefined) {
        this._supportedColorConfigurations = value;
    };
    /**
     * Gets the supportedCopiesPerJob property value. The supportedCopiesPerJob property
     * @returns a integerRange
     */
    public get supportedCopiesPerJob() {
        return this._supportedCopiesPerJob;
    };
    /**
     * Sets the supportedCopiesPerJob property value. The supportedCopiesPerJob property
     * @param value Value to set for the supportedCopiesPerJob property.
     */
    public set supportedCopiesPerJob(value: IntegerRange | undefined) {
        this._supportedCopiesPerJob = value;
    };
    /**
     * Gets the supportedDocumentMimeTypes property value. The supportedDocumentMimeTypes property
     * @returns a string
     */
    public get supportedDocumentMimeTypes() {
        return this._supportedDocumentMimeTypes;
    };
    /**
     * Sets the supportedDocumentMimeTypes property value. The supportedDocumentMimeTypes property
     * @param value Value to set for the supportedDocumentMimeTypes property.
     */
    public set supportedDocumentMimeTypes(value: string[] | undefined) {
        this._supportedDocumentMimeTypes = value;
    };
    /**
     * Gets the supportedDuplexConfigurations property value. The supportedDuplexConfigurations property
     * @returns a printDuplexConfiguration
     */
    public get supportedDuplexConfigurations() {
        return this._supportedDuplexConfigurations;
    };
    /**
     * Sets the supportedDuplexConfigurations property value. The supportedDuplexConfigurations property
     * @param value Value to set for the supportedDuplexConfigurations property.
     */
    public set supportedDuplexConfigurations(value: PrintDuplexConfiguration[] | undefined) {
        this._supportedDuplexConfigurations = value;
    };
    /**
     * Gets the supportedFinishings property value. The supportedFinishings property
     * @returns a printFinishing
     */
    public get supportedFinishings() {
        return this._supportedFinishings;
    };
    /**
     * Sets the supportedFinishings property value. The supportedFinishings property
     * @param value Value to set for the supportedFinishings property.
     */
    public set supportedFinishings(value: PrintFinishing[] | undefined) {
        this._supportedFinishings = value;
    };
    /**
     * Gets the supportedMediaColors property value. The supportedMediaColors property
     * @returns a string
     */
    public get supportedMediaColors() {
        return this._supportedMediaColors;
    };
    /**
     * Sets the supportedMediaColors property value. The supportedMediaColors property
     * @param value Value to set for the supportedMediaColors property.
     */
    public set supportedMediaColors(value: string[] | undefined) {
        this._supportedMediaColors = value;
    };
    /**
     * Gets the supportedMediaSizes property value. The supportedMediaSizes property
     * @returns a string
     */
    public get supportedMediaSizes() {
        return this._supportedMediaSizes;
    };
    /**
     * Sets the supportedMediaSizes property value. The supportedMediaSizes property
     * @param value Value to set for the supportedMediaSizes property.
     */
    public set supportedMediaSizes(value: string[] | undefined) {
        this._supportedMediaSizes = value;
    };
    /**
     * Gets the supportedMediaTypes property value. The supportedMediaTypes property
     * @returns a printMediaType
     */
    public get supportedMediaTypes() {
        return this._supportedMediaTypes;
    };
    /**
     * Sets the supportedMediaTypes property value. The supportedMediaTypes property
     * @param value Value to set for the supportedMediaTypes property.
     */
    public set supportedMediaTypes(value: PrintMediaType[] | undefined) {
        this._supportedMediaTypes = value;
    };
    /**
     * Gets the supportedOrientations property value. The supportedOrientations property
     * @returns a printOrientation
     */
    public get supportedOrientations() {
        return this._supportedOrientations;
    };
    /**
     * Sets the supportedOrientations property value. The supportedOrientations property
     * @param value Value to set for the supportedOrientations property.
     */
    public set supportedOrientations(value: PrintOrientation[] | undefined) {
        this._supportedOrientations = value;
    };
    /**
     * Gets the supportedOutputBins property value. The supportedOutputBins property
     * @returns a string
     */
    public get supportedOutputBins() {
        return this._supportedOutputBins;
    };
    /**
     * Sets the supportedOutputBins property value. The supportedOutputBins property
     * @param value Value to set for the supportedOutputBins property.
     */
    public set supportedOutputBins(value: string[] | undefined) {
        this._supportedOutputBins = value;
    };
    /**
     * Gets the supportedPagesPerSheet property value. The supportedPagesPerSheet property
     * @returns a integerRange
     */
    public get supportedPagesPerSheet() {
        return this._supportedPagesPerSheet;
    };
    /**
     * Sets the supportedPagesPerSheet property value. The supportedPagesPerSheet property
     * @param value Value to set for the supportedPagesPerSheet property.
     */
    public set supportedPagesPerSheet(value: IntegerRange | undefined) {
        this._supportedPagesPerSheet = value;
    };
    /**
     * Gets the supportedPresentationDirections property value. The supportedPresentationDirections property
     * @returns a printPresentationDirection
     */
    public get supportedPresentationDirections() {
        return this._supportedPresentationDirections;
    };
    /**
     * Sets the supportedPresentationDirections property value. The supportedPresentationDirections property
     * @param value Value to set for the supportedPresentationDirections property.
     */
    public set supportedPresentationDirections(value: PrintPresentationDirection[] | undefined) {
        this._supportedPresentationDirections = value;
    };
    /**
     * Gets the supportedPrintQualities property value. The supportedPrintQualities property
     * @returns a printQuality
     */
    public get supportedPrintQualities() {
        return this._supportedPrintQualities;
    };
    /**
     * Sets the supportedPrintQualities property value. The supportedPrintQualities property
     * @param value Value to set for the supportedPrintQualities property.
     */
    public set supportedPrintQualities(value: PrintQuality[] | undefined) {
        this._supportedPrintQualities = value;
    };
    /**
     * Gets the supportsFitPdfToPage property value. True if the printer supports scaling PDF pages to match the print media size; false otherwise.
     * @returns a boolean
     */
    public get supportsFitPdfToPage() {
        return this._supportsFitPdfToPage;
    };
    /**
     * Sets the supportsFitPdfToPage property value. True if the printer supports scaling PDF pages to match the print media size; false otherwise.
     * @param value Value to set for the supportsFitPdfToPage property.
     */
    public set supportsFitPdfToPage(value: boolean | undefined) {
        this._supportsFitPdfToPage = value;
    };
    /**
     * Gets the topMargins property value. A list of supported top margins(in microns) for the printer.
     * @returns a integer
     */
    public get topMargins() {
        return this._topMargins;
    };
    /**
     * Sets the topMargins property value. A list of supported top margins(in microns) for the printer.
     * @param value Value to set for the topMargins property.
     */
    public set topMargins(value: number[] | undefined) {
        this._topMargins = value;
    };
}
