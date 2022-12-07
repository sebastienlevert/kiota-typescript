import {PrintColorConfiguration} from './printColorConfiguration';
import {PrintColorMode} from './printColorMode';
import {PrintDuplexConfiguration} from './printDuplexConfiguration';
import {PrintDuplexMode} from './printDuplexMode';
import {PrintFinishing} from './printFinishing';
import {PrintMultipageLayout} from './printMultipageLayout';
import {PrintOrientation} from './printOrientation';
import {PrintPresentationDirection} from './printPresentationDirection';
import {PrintQuality} from './printQuality';
import {PrintScaling} from './printScaling';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterDefaults implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The colorMode property */
    private _colorMode?: PrintColorMode | undefined;
    /** The default content (MIME) type to use when processing documents. */
    private _contentType?: string | undefined;
    /** The default number of copies printed per job. */
    private _copiesPerJob?: number | undefined;
    /** The documentMimeType property */
    private _documentMimeType?: string | undefined;
    /** The default resolution in DPI to use when printing the job. */
    private _dpi?: number | undefined;
    /** The duplexConfiguration property */
    private _duplexConfiguration?: PrintDuplexConfiguration | undefined;
    /** The duplexMode property */
    private _duplexMode?: PrintDuplexMode | undefined;
    /** The default set of finishings to apply to print jobs. Valid values are described in the following table. */
    private _finishings?: PrintFinishing[] | undefined;
    /** The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions. */
    private _fitPdfToPage?: boolean | undefined;
    /** The default input bin that serves as the paper source. */
    private _inputBin?: string | undefined;
    /** The default media (such as paper) color to print the document on. */
    private _mediaColor?: string | undefined;
    /** The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic. */
    private _mediaSize?: string | undefined;
    /** The default media (such as paper) type to print the document on. */
    private _mediaType?: string | undefined;
    /** The multipageLayout property */
    private _multipageLayout?: PrintMultipageLayout | undefined;
    /** The orientation property */
    private _orientation?: PrintOrientation | undefined;
    /** The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins. */
    private _outputBin?: string | undefined;
    /** The default number of document pages to print on each sheet. */
    private _pagesPerSheet?: number | undefined;
    /** The pdfFitToPage property */
    private _pdfFitToPage?: boolean | undefined;
    /** The presentationDirection property */
    private _presentationDirection?: PrintPresentationDirection | undefined;
    /** The printColorConfiguration property */
    private _printColorConfiguration?: PrintColorConfiguration | undefined;
    /** The printQuality property */
    private _printQuality?: PrintQuality | undefined;
    /** The quality property */
    private _quality?: PrintQuality | undefined;
    /** The scaling property */
    private _scaling?: PrintScaling | undefined;
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
     * Gets the colorMode property value. The colorMode property
     * @returns a printColorMode
     */
    public get colorMode() {
        return this._colorMode;
    };
    /**
     * Sets the colorMode property value. The colorMode property
     * @param value Value to set for the colorMode property.
     */
    public set colorMode(value: PrintColorMode | undefined) {
        this._colorMode = value;
    };
    /**
     * Instantiates a new printerDefaults and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the contentType property value. The default content (MIME) type to use when processing documents.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The default content (MIME) type to use when processing documents.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Gets the copiesPerJob property value. The default number of copies printed per job.
     * @returns a integer
     */
    public get copiesPerJob() {
        return this._copiesPerJob;
    };
    /**
     * Sets the copiesPerJob property value. The default number of copies printed per job.
     * @param value Value to set for the copiesPerJob property.
     */
    public set copiesPerJob(value: number | undefined) {
        this._copiesPerJob = value;
    };
    /**
     * Gets the documentMimeType property value. The documentMimeType property
     * @returns a string
     */
    public get documentMimeType() {
        return this._documentMimeType;
    };
    /**
     * Sets the documentMimeType property value. The documentMimeType property
     * @param value Value to set for the documentMimeType property.
     */
    public set documentMimeType(value: string | undefined) {
        this._documentMimeType = value;
    };
    /**
     * Gets the dpi property value. The default resolution in DPI to use when printing the job.
     * @returns a integer
     */
    public get dpi() {
        return this._dpi;
    };
    /**
     * Sets the dpi property value. The default resolution in DPI to use when printing the job.
     * @param value Value to set for the dpi property.
     */
    public set dpi(value: number | undefined) {
        this._dpi = value;
    };
    /**
     * Gets the duplexConfiguration property value. The duplexConfiguration property
     * @returns a printDuplexConfiguration
     */
    public get duplexConfiguration() {
        return this._duplexConfiguration;
    };
    /**
     * Sets the duplexConfiguration property value. The duplexConfiguration property
     * @param value Value to set for the duplexConfiguration property.
     */
    public set duplexConfiguration(value: PrintDuplexConfiguration | undefined) {
        this._duplexConfiguration = value;
    };
    /**
     * Gets the duplexMode property value. The duplexMode property
     * @returns a printDuplexMode
     */
    public get duplexMode() {
        return this._duplexMode;
    };
    /**
     * Sets the duplexMode property value. The duplexMode property
     * @param value Value to set for the duplexMode property.
     */
    public set duplexMode(value: PrintDuplexMode | undefined) {
        this._duplexMode = value;
    };
    /**
     * Gets the finishings property value. The default set of finishings to apply to print jobs. Valid values are described in the following table.
     * @returns a printFinishing
     */
    public get finishings() {
        return this._finishings;
    };
    /**
     * Sets the finishings property value. The default set of finishings to apply to print jobs. Valid values are described in the following table.
     * @param value Value to set for the finishings property.
     */
    public set finishings(value: PrintFinishing[] | undefined) {
        this._finishings = value;
    };
    /**
     * Gets the fitPdfToPage property value. The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions.
     * @returns a boolean
     */
    public get fitPdfToPage() {
        return this._fitPdfToPage;
    };
    /**
     * Sets the fitPdfToPage property value. The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions.
     * @param value Value to set for the fitPdfToPage property.
     */
    public set fitPdfToPage(value: boolean | undefined) {
        this._fitPdfToPage = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "colorMode": n => { this.colorMode = n.getEnumValue<PrintColorMode>(PrintColorMode); },
            "contentType": n => { this.contentType = n.getStringValue(); },
            "copiesPerJob": n => { this.copiesPerJob = n.getNumberValue(); },
            "documentMimeType": n => { this.documentMimeType = n.getStringValue(); },
            "dpi": n => { this.dpi = n.getNumberValue(); },
            "duplexConfiguration": n => { this.duplexConfiguration = n.getEnumValue<PrintDuplexConfiguration>(PrintDuplexConfiguration); },
            "duplexMode": n => { this.duplexMode = n.getEnumValue<PrintDuplexMode>(PrintDuplexMode); },
            "finishings": n => { this.finishings = n.getEnumValues<PrintFinishing>(PrintFinishing); },
            "fitPdfToPage": n => { this.fitPdfToPage = n.getBooleanValue(); },
            "inputBin": n => { this.inputBin = n.getStringValue(); },
            "mediaColor": n => { this.mediaColor = n.getStringValue(); },
            "mediaSize": n => { this.mediaSize = n.getStringValue(); },
            "mediaType": n => { this.mediaType = n.getStringValue(); },
            "multipageLayout": n => { this.multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout); },
            "orientation": n => { this.orientation = n.getEnumValue<PrintOrientation>(PrintOrientation); },
            "outputBin": n => { this.outputBin = n.getStringValue(); },
            "pagesPerSheet": n => { this.pagesPerSheet = n.getNumberValue(); },
            "pdfFitToPage": n => { this.pdfFitToPage = n.getBooleanValue(); },
            "presentationDirection": n => { this.presentationDirection = n.getEnumValue<PrintPresentationDirection>(PrintPresentationDirection); },
            "printColorConfiguration": n => { this.printColorConfiguration = n.getEnumValue<PrintColorConfiguration>(PrintColorConfiguration); },
            "printQuality": n => { this.printQuality = n.getEnumValue<PrintQuality>(PrintQuality); },
            "quality": n => { this.quality = n.getEnumValue<PrintQuality>(PrintQuality); },
            "scaling": n => { this.scaling = n.getEnumValue<PrintScaling>(PrintScaling); },
        };
    };
    /**
     * Gets the inputBin property value. The default input bin that serves as the paper source.
     * @returns a string
     */
    public get inputBin() {
        return this._inputBin;
    };
    /**
     * Sets the inputBin property value. The default input bin that serves as the paper source.
     * @param value Value to set for the inputBin property.
     */
    public set inputBin(value: string | undefined) {
        this._inputBin = value;
    };
    /**
     * Gets the mediaColor property value. The default media (such as paper) color to print the document on.
     * @returns a string
     */
    public get mediaColor() {
        return this._mediaColor;
    };
    /**
     * Sets the mediaColor property value. The default media (such as paper) color to print the document on.
     * @param value Value to set for the mediaColor property.
     */
    public set mediaColor(value: string | undefined) {
        this._mediaColor = value;
    };
    /**
     * Gets the mediaSize property value. The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.
     * @returns a string
     */
    public get mediaSize() {
        return this._mediaSize;
    };
    /**
     * Sets the mediaSize property value. The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.
     * @param value Value to set for the mediaSize property.
     */
    public set mediaSize(value: string | undefined) {
        this._mediaSize = value;
    };
    /**
     * Gets the mediaType property value. The default media (such as paper) type to print the document on.
     * @returns a string
     */
    public get mediaType() {
        return this._mediaType;
    };
    /**
     * Sets the mediaType property value. The default media (such as paper) type to print the document on.
     * @param value Value to set for the mediaType property.
     */
    public set mediaType(value: string | undefined) {
        this._mediaType = value;
    };
    /**
     * Gets the multipageLayout property value. The multipageLayout property
     * @returns a printMultipageLayout
     */
    public get multipageLayout() {
        return this._multipageLayout;
    };
    /**
     * Sets the multipageLayout property value. The multipageLayout property
     * @param value Value to set for the multipageLayout property.
     */
    public set multipageLayout(value: PrintMultipageLayout | undefined) {
        this._multipageLayout = value;
    };
    /**
     * Gets the orientation property value. The orientation property
     * @returns a printOrientation
     */
    public get orientation() {
        return this._orientation;
    };
    /**
     * Sets the orientation property value. The orientation property
     * @param value Value to set for the orientation property.
     */
    public set orientation(value: PrintOrientation | undefined) {
        this._orientation = value;
    };
    /**
     * Gets the outputBin property value. The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
     * @returns a string
     */
    public get outputBin() {
        return this._outputBin;
    };
    /**
     * Sets the outputBin property value. The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
     * @param value Value to set for the outputBin property.
     */
    public set outputBin(value: string | undefined) {
        this._outputBin = value;
    };
    /**
     * Gets the pagesPerSheet property value. The default number of document pages to print on each sheet.
     * @returns a integer
     */
    public get pagesPerSheet() {
        return this._pagesPerSheet;
    };
    /**
     * Sets the pagesPerSheet property value. The default number of document pages to print on each sheet.
     * @param value Value to set for the pagesPerSheet property.
     */
    public set pagesPerSheet(value: number | undefined) {
        this._pagesPerSheet = value;
    };
    /**
     * Gets the pdfFitToPage property value. The pdfFitToPage property
     * @returns a boolean
     */
    public get pdfFitToPage() {
        return this._pdfFitToPage;
    };
    /**
     * Sets the pdfFitToPage property value. The pdfFitToPage property
     * @param value Value to set for the pdfFitToPage property.
     */
    public set pdfFitToPage(value: boolean | undefined) {
        this._pdfFitToPage = value;
    };
    /**
     * Gets the presentationDirection property value. The presentationDirection property
     * @returns a printPresentationDirection
     */
    public get presentationDirection() {
        return this._presentationDirection;
    };
    /**
     * Sets the presentationDirection property value. The presentationDirection property
     * @param value Value to set for the presentationDirection property.
     */
    public set presentationDirection(value: PrintPresentationDirection | undefined) {
        this._presentationDirection = value;
    };
    /**
     * Gets the printColorConfiguration property value. The printColorConfiguration property
     * @returns a printColorConfiguration
     */
    public get printColorConfiguration() {
        return this._printColorConfiguration;
    };
    /**
     * Sets the printColorConfiguration property value. The printColorConfiguration property
     * @param value Value to set for the printColorConfiguration property.
     */
    public set printColorConfiguration(value: PrintColorConfiguration | undefined) {
        this._printColorConfiguration = value;
    };
    /**
     * Gets the printQuality property value. The printQuality property
     * @returns a printQuality
     */
    public get printQuality() {
        return this._printQuality;
    };
    /**
     * Sets the printQuality property value. The printQuality property
     * @param value Value to set for the printQuality property.
     */
    public set printQuality(value: PrintQuality | undefined) {
        this._printQuality = value;
    };
    /**
     * Gets the quality property value. The quality property
     * @returns a printQuality
     */
    public get quality() {
        return this._quality;
    };
    /**
     * Sets the quality property value. The quality property
     * @param value Value to set for the quality property.
     */
    public set quality(value: PrintQuality | undefined) {
        this._quality = value;
    };
    /**
     * Gets the scaling property value. The scaling property
     * @returns a printScaling
     */
    public get scaling() {
        return this._scaling;
    };
    /**
     * Sets the scaling property value. The scaling property
     * @param value Value to set for the scaling property.
     */
    public set scaling(value: PrintScaling | undefined) {
        this._scaling = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<PrintColorMode>("colorMode", this.colorMode);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeNumberValue("copiesPerJob", this.copiesPerJob);
        writer.writeStringValue("documentMimeType", this.documentMimeType);
        writer.writeNumberValue("dpi", this.dpi);
        writer.writeEnumValue<PrintDuplexConfiguration>("duplexConfiguration", this.duplexConfiguration);
        writer.writeEnumValue<PrintDuplexMode>("duplexMode", this.duplexMode);
        this.finishings && writer.writeEnumValue<PrintFinishing>("finishings", ...this.finishings);
        writer.writeBooleanValue("fitPdfToPage", this.fitPdfToPage);
        writer.writeStringValue("inputBin", this.inputBin);
        writer.writeStringValue("mediaColor", this.mediaColor);
        writer.writeStringValue("mediaSize", this.mediaSize);
        writer.writeStringValue("mediaType", this.mediaType);
        writer.writeEnumValue<PrintMultipageLayout>("multipageLayout", this.multipageLayout);
        writer.writeEnumValue<PrintOrientation>("orientation", this.orientation);
        writer.writeStringValue("outputBin", this.outputBin);
        writer.writeNumberValue("pagesPerSheet", this.pagesPerSheet);
        writer.writeBooleanValue("pdfFitToPage", this.pdfFitToPage);
        writer.writeEnumValue<PrintPresentationDirection>("presentationDirection", this.presentationDirection);
        writer.writeEnumValue<PrintColorConfiguration>("printColorConfiguration", this.printColorConfiguration);
        writer.writeEnumValue<PrintQuality>("printQuality", this.printQuality);
        writer.writeEnumValue<PrintQuality>("quality", this.quality);
        writer.writeEnumValue<PrintScaling>("scaling", this.scaling);
        writer.writeAdditionalData(this.additionalData);
    };
}
