import {AppLogUploadState} from './appLogUploadState';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** AppLogCollectionRequest Entity. */
export class AppLogCollectionRequest extends Entity implements Parsable {
    /** Time at which the upload log request reached a terminal state */
    private _completedDateTime?: Date | undefined;
    /** List of log folders. */
    private _customLogFolders?: string[] | undefined;
    /** Error message if any during the upload process */
    private _errorMessage?: string | undefined;
    /** AppLogUploadStatus */
    private _status?: AppLogUploadState | undefined;
    /**
     * Gets the completedDateTime property value. Time at which the upload log request reached a terminal state
     * @returns a Date
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Sets the completedDateTime property value. Time at which the upload log request reached a terminal state
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: Date | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Instantiates a new appLogCollectionRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the customLogFolders property value. List of log folders.
     * @returns a string
     */
    public get customLogFolders() {
        return this._customLogFolders;
    };
    /**
     * Sets the customLogFolders property value. List of log folders.
     * @param value Value to set for the customLogFolders property.
     */
    public set customLogFolders(value: string[] | undefined) {
        this._customLogFolders = value;
    };
    /**
     * Gets the errorMessage property value. Error message if any during the upload process
     * @returns a string
     */
    public get errorMessage() {
        return this._errorMessage;
    };
    /**
     * Sets the errorMessage property value. Error message if any during the upload process
     * @param value Value to set for the errorMessage property.
     */
    public set errorMessage(value: string | undefined) {
        this._errorMessage = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "completedDateTime": n => { this.completedDateTime = n.getDateValue(); },
            "customLogFolders": n => { this.customLogFolders = n.getCollectionOfPrimitiveValues<string>(); },
            "errorMessage": n => { this.errorMessage = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<AppLogUploadState>(AppLogUploadState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("customLogFolders", this.customLogFolders);
        writer.writeStringValue("errorMessage", this.errorMessage);
        writer.writeEnumValue<AppLogUploadState>("status", this.status);
    };
    /**
     * Gets the status property value. AppLogUploadStatus
     * @returns a appLogUploadState
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. AppLogUploadStatus
     * @param value Value to set for the status property.
     */
    public set status(value: AppLogUploadState | undefined) {
        this._status = value;
    };
}
