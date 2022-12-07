import {createFolderViewFromDiscriminatorValue} from './createFolderViewFromDiscriminatorValue';
import {FolderView} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Folder implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Number of children contained immediately within this container. */
    private _childCount?: number | undefined;
    /** The view property */
    private _view?: FolderView | undefined;
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
     * Gets the childCount property value. Number of children contained immediately within this container.
     * @returns a integer
     */
    public get childCount() {
        return this._childCount;
    };
    /**
     * Sets the childCount property value. Number of children contained immediately within this container.
     * @param value Value to set for the childCount property.
     */
    public set childCount(value: number | undefined) {
        this._childCount = value;
    };
    /**
     * Instantiates a new folder and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "childCount": n => { this.childCount = n.getNumberValue(); },
            "view": n => { this.view = n.getObjectValue<FolderView>(createFolderViewFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("childCount", this.childCount);
        writer.writeObjectValue<FolderView>("view", this.view);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the view property value. The view property
     * @returns a folderView
     */
    public get view() {
        return this._view;
    };
    /**
     * Sets the view property value. The view property
     * @param value Value to set for the view property.
     */
    public set view(value: FolderView | undefined) {
        this._view = value;
    };
}
