import {Entity} from '../';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
import {Set, Term} from './index';
import {RelationType} from './relationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Relation extends Entity implements Parsable {
    /** The fromTerm property */
    private _fromTerm?: Term | undefined;
    /** The relationship property */
    private _relationship?: RelationType | undefined;
    /** The set property */
    private _set?: Set | undefined;
    /** The toTerm property */
    private _toTerm?: Term | undefined;
    /**
     * Instantiates a new relation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fromTerm property value. The fromTerm property
     * @returns a term
     */
    public get fromTerm() {
        return this._fromTerm;
    };
    /**
     * Sets the fromTerm property value. The fromTerm property
     * @param value Value to set for the fromTerm property.
     */
    public set fromTerm(value: Term | undefined) {
        this._fromTerm = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fromTerm": n => { this.fromTerm = n.getObjectValue<Term>(createTermFromDiscriminatorValue); },
            "relationship": n => { this.relationship = n.getEnumValue<RelationType>(RelationType); },
            "set": n => { this.set = n.getObjectValue<Set>(createSetFromDiscriminatorValue); },
            "toTerm": n => { this.toTerm = n.getObjectValue<Term>(createTermFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the relationship property value. The relationship property
     * @returns a relationType
     */
    public get relationship() {
        return this._relationship;
    };
    /**
     * Sets the relationship property value. The relationship property
     * @param value Value to set for the relationship property.
     */
    public set relationship(value: RelationType | undefined) {
        this._relationship = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Term>("fromTerm", this.fromTerm);
        writer.writeEnumValue<RelationType>("relationship", this.relationship);
        writer.writeObjectValue<Set>("set", this.set);
        writer.writeObjectValue<Term>("toTerm", this.toTerm);
    };
    /**
     * Gets the set property value. The set property
     * @returns a set
     */
    public get set() {
        return this._set;
    };
    /**
     * Sets the set property value. The set property
     * @param value Value to set for the set property.
     */
    public set set(value: Set | undefined) {
        this._set = value;
    };
    /**
     * Gets the toTerm property value. The toTerm property
     * @returns a term
     */
    public get toTerm() {
        return this._toTerm;
    };
    /**
     * Sets the toTerm property value. The toTerm property
     * @param value Value to set for the toTerm property.
     */
    public set toTerm(value: Term | undefined) {
        this._toTerm = value;
    };
}
