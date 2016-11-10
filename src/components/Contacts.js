import React from 'react';
import ContactCreator from './ContactCreator';
import ContactRemover from './ContactRemover';
import ContactEditor from './ContactEditor';
import update from 'react-addons-update';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ],
            selectedKey: -1,
            selected: {
                name: "",
                phone: ""
            }
        };
    }

    // 새로운 state 를 사용 할 땐, 언제나 초기 값을 설정해줘야합니다. (그렇지 않으면 오류가 발생하기 쉽상입니다.)
    //
    // Contact를 선택하였을 때 prop selected 에 값을 저장 하게하고,
    // 선택을 취소 하였을 때, 값을 공백으로 설정하도록 하였습니다.
    //
    // 그리고 이 prop selected 값을 ContactEditor 에 prop contact로 전달해 준다
    _removeContact(){
        if(this.state.selectedKey==-1){
            console.log("contact not selected");
            return;
        }

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        });
    }

/*

update() 메소드의 첫 파라미터는 처리 할 배열이며 두번째는 처리 할 명령들을 지니고 있는 객체 타입입니다.

$push: [newObj, newObj2]는 list 배열에 newObj 와 newObj2 를 추가해줍니다.
한 객체를 추가 할 때도 [ ] 안에 배열형태로 감싸줘야합니다.

Immutable-js 의 syntax 는 MongoDB 쿼리 언어에서 영감을 받았다고 합니다.

브라우저상에서 react-with-addons를 불러와서 사용하는 경우에는 update 가 아닌 React.addons.update 를 사용해야합니다.

*/


// Immutability Helpers 를 사용하여 배열에 원소를 추가하였으며,
// _insertContact(name, phone) 메소드를 ContactCreator 의 prop 으로 전달 .
    _insertContact(name, phone){
        let newState = update(this.state, {
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }

    _editContact(name, phone){
       this.setState({
           contactData: update(
               this.state.contactData,
               {
                   [this.state.selectedKey]: {
                       name: { $set: name },
                       phone: { $set: phone }
                   }
               }
           ),
           selected: {
               name: name,
               phone: phone
           }
       });
   }

    _onSelect(key){
        if(key==this.state.selectedKey){
            console.log("key select cancelled");
            this.setState({
                selectedKey: -1,
                selected: {
                    name: "",
                    phone: ""
                }
            });
            return;
        }

        this.setState({
            selectedKey: key,
            selected: this.state.contactData[key]
        });
        console.log(key + " is selected");
    }

    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                            phone={contact.phone}
                                              key={i}/>);
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
                <ContactRemover onRemove={this._removeContact.bind(this)}/>
                <ContactEditor onEdit={this._editContact.bind(this)}
                          isSelected={(this.state.selectedKey !=-1)}/>
            </div>
        );
    }
}

class ContactInfo extends React.Component {
    render() {
        return(
            <li>{this.props.name} {this.props.phone}</li>
            );
    }
}
export default Contacts;
