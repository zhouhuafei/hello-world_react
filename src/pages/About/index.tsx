import { useEffect, useState } from 'react'


function About () {
  const [formFields, setFormFields] = useState({
    radio1: 'radio1-1',
    checkbox1: true,
    checkbox2: [
      { value: 'checkbox2-1', checked: false },
      { value: 'checkbox2-2', checked: false },
      { value: 'checkbox2-3', checked: false }
    ]
  })
  useEffect(() => {
  })
  const fnRadio1Change = (e: any) => {
    setFormFields({ ...formFields, radio1: e.target.value })
  }
  const fnCheckbox1Change = (e: any) => {
    setFormFields({ ...formFields, checkbox1: !formFields.checkbox1 })
  }
  const fnCheckbox2Change = (e: any, index: number) => {
    let checkbox2 = formFields.checkbox2
    checkbox2[index].checked = !checkbox2[index].checked
    setFormFields({ ...formFields, checkbox2 })
  }
  return (
    <div className="About">
      <h4 style={{ textAlign: 'center' }}>About</h4>
      <div style={{ textAlign: 'center' }}>
        <div>
          <div>radio1：{formFields.radio1}</div>
          <div>
            <label><input type="radio" name="radio" value="radio1-1" checked={formFields.radio1 === 'radio1-1'}
                          onChange={fnRadio1Change} />radio1-1</label>
            <label><input type="radio" name="radio" value="radio1-2" checked={formFields.radio1 === 'radio1-2'}
                          onChange={fnRadio1Change} />radio1-2</label>
            <label><input type="radio" name="radio" value="radio1-3" checked={formFields.radio1 === 'radio1-3'}
                          onChange={fnRadio1Change} />radio1-3</label>
          </div>
        </div>
        <div>
          <div>checkbox1：{String(formFields.checkbox1)}</div>
          <div>
            <input type="checkbox" checked={formFields.checkbox1} onChange={fnCheckbox1Change} />
          </div>
        </div>
        <div>
          <div>checkbox2：{JSON.stringify(formFields.checkbox2.filter(v => v.checked).map(v => v.value))}</div>
          <div>
            <label><input type="checkbox" checked={formFields.checkbox2[0].checked}
                          onChange={e => fnCheckbox2Change(e, 0)} />checkbox2-1</label>
            <label><input type="checkbox" checked={formFields.checkbox2[1].checked}
                          onChange={e => fnCheckbox2Change(e, 1)} />checkbox2-2</label>
            <label><input type="checkbox" checked={formFields.checkbox2[2].checked}
                          onChange={e => fnCheckbox2Change(e, 2)} />checkbox2-3</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
