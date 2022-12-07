import {createInformationProtectionLabelFromDiscriminatorValue} from './createInformationProtectionLabelFromDiscriminatorValue';
import {Entity, InformationProtectionLabel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationProtectionPolicy extends Entity implements Parsable {
    /** The labels property */
    private _labels?: InformationProtectionLabel[] | undefined;
    /**
     * Instantiates a new informationProtectionPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "labels": n => { this.labels = n.getCollectionOfObjectValues<InformationProtectionLabel>(createInformationProtectionLabelFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the labels property value. The labels property
     * @returns a informationProtectionLabel
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Sets the labels property value. The labels property
     * @param value Value to set for the labels property.
     */
    public set labels(value: InformationProtectionLabel[] | undefined) {
        this._labels = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<InformationProtectionLabel>("labels", this.labels);
    };
}
