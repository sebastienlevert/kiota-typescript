import {createPrinterDocumentConfigurationFromDiscriminatorValue} from './createPrinterDocumentConfigurationFromDiscriminatorValue';
import {Entity, PrinterDocumentConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintDocument extends Entity implements Parsable {
    /** The configuration property */
    private _configuration?: PrinterDocumentConfiguration | undefined;
    /** The document's content (MIME) type. Read-only. */
    private _contentType?: string | undefined;
    /** The document's name. Read-only. */
    private _displayName?: string | undefined;
    /** The downloadedDateTime property */
    private _downloadedDateTime?: Date | undefined;
    /** The document's size in bytes. Read-only. */
    private _size?: number | undefined;
    /** The uploadedDateTime property */
    private _uploadedDateTime?: Date | undefined;
    /**
     * Gets the configuration property value. The configuration property
     * @returns a printerDocumentConfiguration
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. The configuration property
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: PrinterDocumentConfiguration | undefined) {
        this._configuration = value;
    };
    /**
     * Instantiates a new printDocument and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentType property value. The document's content (MIME) type. Read-only.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The document's content (MIME) type. Read-only.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Gets the displayName property value. The document's name. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The document's name. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the downloadedDateTime property value. The downloadedDateTime property
     * @returns a Date
     */
    public get downloadedDateTime() {
        return this._downloadedDateTime;
    };
    /**
     * Sets the downloadedDateTime property value. The downloadedDateTime property
     * @param value Value to set for the downloadedDateTime property.
     */
    public set downloadedDateTime(value: Date | undefined) {
        this._downloadedDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "configuration": n => { this.configuration = n.getObjectValue<PrinterDocumentConfiguration>(createPrinterDocumentConfigurationFromDiscriminatorValue); },
            "contentType": n => { this.contentType = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "downloadedDateTime": n => { this.downloadedDateTime = n.getDateValue(); },
            "size": n => { this.size = n.getNumberValue(); },
            "uploadedDateTime": n => { this.uploadedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PrinterDocumentConfiguration>("configuration", this.configuration);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("downloadedDateTime", this.downloadedDateTime);
        writer.writeNumberValue("size", this.size);
        writer.writeDateValue("uploadedDateTime", this.uploadedDateTime);
    };
    /**
     * Gets the size property value. The document's size in bytes. Read-only.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The document's size in bytes. Read-only.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Gets the uploadedDateTime property value. The uploadedDateTime property
     * @returns a Date
     */
    public get uploadedDateTime() {
        return this._uploadedDateTime;
    };
    /**
     * Sets the uploadedDateTime property value. The uploadedDateTime property
     * @param value Value to set for the uploadedDateTime property.
     */
    public set uploadedDateTime(value: Date | undefined) {
        this._uploadedDateTime = value;
    };
}
