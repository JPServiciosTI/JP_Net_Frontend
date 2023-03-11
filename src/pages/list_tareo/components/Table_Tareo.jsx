import { useContext, useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Modal, Button } from 'react-bootstrap'
import { BiAddToQueue } from 'react-icons/bi'
import { TbReport } from 'react-icons/tb'
import { NewExtraTime } from '../components/Modals/modal_Nhoraextra/NewExtraTime'
import { NewTareo } from '../components/Modals/modal_Ntareo/NewTareo'
import { LicenciaCon } from '../components/Modals/modal_LicenciaCon/LicenciaCon'

import { get } from '../../../services/api/api.service'
import './table_tareo.css'
import { useCookies } from 'react-cookie'
import { Calendario } from './Modals/modal_Calendario/Calendario'
import { DescansosTrabajados } from './Modals/modal_DescansosTrabajados/DescansosTrabajados'
import { Vacaciones } from './Modals/modal_Vacaciones/Vacaciones'
import { DescansoMedico } from './Modals/modal_DescnasoMedico/DescansoMedico'
import { FeriadosTrabajados } from './Modals/modal_FeriadosTrabajados/FeriadosTrabajados'
import { LicenciaSin } from './Modals/modal_LicenciaSin/LicenciaSin'

const hoy = new Date()
let day = hoy.getDate()
let month = hoy.getMonth() + 1
let year = hoy.getFullYear()
day = ('0' + day).slice(-2)
month = ('0' + month).slice(-2)
let date = day + '/' + month + '/' + year

function Table_Tareo() {
  const [cookies, setCookie, removeCookie] = useCookies(['jp_net_idEmpleado'])

  const [show1, setshow1] = useState(false)
  const handleShow1 = () => setshow1(true)
  const handleClose1 = () => setshow1(false)

  const [show2, setshow2] = useState(false)
  const handleShow2 = (e) => {
    e.preventDefault()
    setshow2(true)
    console.log('Valores del Console', e)
    setCookie('jp_net_idEmpleado', e.target.value)
  }
  const handleClose2 = () => {
    setshow2(false)
    removeCookie('jp_net_idEmpleado')
  }

  const [show3, setshow3] = useState(false)
  const handleShow3 = (e) => {
    setshow3(true)
    setCookie('jp_net_idEmpleado', e.target.value)
  }
  const handleClose3 = () => {
    setshow3(false)
    removeCookie('jp_net_idEmpleado')
  }
  const [show4, setshow4] = useState(false)
  const handleShow4 = (e) => {
    setshow4(true)
    setCookie('jp_net_idEmpleado', e.target.value)
  }
  const handleClose4 = () => {
    setshow4(false)
    removeCookie('jp_net_idEmpleado')
  }

  const [show5, setshow5] = useState(false)
  const handleShow5 = (e) => {
    setshow5(true)
    setCookie('jp_net_idEmpleado', e.target.value)
  }
  const handleClose5 = () => {
    setshow5(false)
    removeCookie('jp_net_idEmpleado')
  }

  const [show6, setshow6] = useState(false)
  const handleShow6 = (e) => {
    setshow6(true)
    setCookie('jp_net_idEmpleado', e.target.value)
  }
  const handleClose6 = () => {
    setshow6(false)
    removeCookie('jp_net_idEmpleado')
  }

  const [show7, setshow7] = useState(false)
  const handleShow7 = (e) => {
    setshow7(true)
    setCookie('jp_net_idEmpleado', e.target.value)
  }
  const handleClose7 = () => {
    setshow7(false)
    removeCookie('jp_net_idEmpleado')
  }
  const [show8, setshow8] = useState(false)
  const handleShow8 = (e) => {
    setshow8(true)
    setCookie('jp_net_idEmpleado', e.target.value)
  }
  const handleClose8 = () => {
    setshow8(false)
    removeCookie('jp_net_idEmpleado')
  }
  const [show9, setshow9] = useState(false)
  const handleShow9 = (e) => {
    setshow9(true)
    setCookie('jp_net_idEmpleado', e.target.value)
  }
  const handleClose9 = () => {
    setshow9(false)
    removeCookie('jp_net_idEmpleado')
  }
  const [show10, setshow10] = useState(false)
  const handleShow10 = (e) => {
    setshow10(true)
    setCookie('jp_net_idEmpleado', e.target.value)
  }
  const handleClose10 = () => {
    setshow10(false)
    removeCookie('jp_net_idEmpleado')
  }
  const [datosCandidatos, setDatosCandidatos] = useState([])
  const [idCandidato, setIdCandidatos] = useState()

  const getDataDeEmpleadoss = async () => {
    try {
      const data = await get({
        url: '/empleado/getForLimit',
        data: {
          idmin: 0,
          cantidad: 10,
        },
      })

      setDatosCandidatos(data['id'][0])
      console.log('Aqui; ', datosCandidatos)
      return
    } catch (error) {
      console.log(error)
    }
  }

  let cargado = false
  useEffect(() => {
    if (!cargado) {
      cargado = true
      getDataDeEmpleadoss()
    }
  }, [])

  const rows = [
    {
      img: 'https://cdn-icons-png.flaticon.com/512/4128/4128349.png',
      nombres: 'Brando Lugger',
      apellidos: 'Pinto Checya',
      cargo: 'TI',
      dni: '70471667  ',
      cell: () => <button>Registrar</button>,
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/4128/4128262.png',
      nombres: 'Brando Lugger',
      apellidos: 'Pinto Checya',
      cargo: 'TI',
      dni: '70471667  ',
      cell: () => <button>Registrar</button>,
    },
  ]

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">
              <span>Nombres Completo</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>DNI</span>
            </TableCell>
            <TableCell className="tableCell">
              <span>Tareo</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Licencia con</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Licencia sin</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Horas extras</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Vacaciones</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Feriados Trabajados</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Descansos Trabajados</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Descanso Médico</span>
            </TableCell>
            <TableCell align="center" className="tableCell">
              <span>Tareo histórico</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datosCandidatos.map((row) => (
            <TableRow key={row.idEmpleado}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    src={'https://picsum.photos/300'}
                    alt=""
                    className="image"
                  />
                  {row.Nombres} {row.ApellidoPaterno} {row.ApellidoMaterno}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.DNI}</TableCell>
              <TableCell className="tableCell btn">
                <button
                  value={row.idEmpleado}
                  onClick={handleShow2}
                  data-toggle="modal2"
                ></button>
              </TableCell>
              <TableCell className="tableCell btn">
                <button
                  onClick={handleShow3}
                  value={row.idEmpleado}
                  data-toggle="modal3"
                ></button>
              </TableCell>
              <TableCell className="tableCell btn">
                <button
                  onClick={handleShow4}
                  data-toggle="modal4"
                  value={row.idEmpleado}
                ></button>
              </TableCell>
              <TableCell className="tableCell btn">
                <button
                  onClick={handleShow10}
                  data-toggle="modal1"
                  value={row.idEmpleado}
                ></button>
              </TableCell>
              <TableCell
                className="tableCell btn"
                align="center"
                value={row.idEmpleado}
              >
                <button
                  onClick={handleShow6}
                  data-toggle="modal1"
                  value={row.idEmpleado}
                >
                  
                </button>
              </TableCell>
              <TableCell
                className="tableCell btn"
                align="center"
                value={row.idEmpleado}
              >
                <button
                  onClick={handleShow7}
                  data-toggle="modal1"
                  value={row.idEmpleado}
                >
                  
                </button>
              </TableCell>
              <TableCell
                className="tableCell btn"
                align="center"
                value={row.idEmpleado}
              >
                <button
                  onClick={handleShow8}
                  data-toggle="modal1"
                  value={row.idEmpleado}
                >
                  
                </button>
              </TableCell>
              <TableCell
                className="tableCell btn"
                align="center"
                value={row.idEmpleado}
              >
                <button
                  onClick={handleShow9}
                  data-toggle="modal1"
                  value={row.idEmpleado}
                  key={row.idEmpleado} 
                >+
                </button>
              </TableCell>
              <TableCell className="tableCell btn">
                <button
                  onClick={handleShow5}
                  data-toggle="modal1"
                  value={row.idEmpleado}
                >
                  <TbReport className="tablei" />
                </button>
              </TableCell>
            </TableRow>
          ))}
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Registrar Hora Extra
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <NewExtraTime />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose1}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Registrar Nuevo Tareo
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <NewTareo />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose2}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show3} onHide={handleClose3}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Registrar Licencia con Goce
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <LicenciaCon />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose3}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show4} onHide={handleClose4}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Registrar Licencia sin Goce
              </Modal.Title>
              <div className="time">
                <label htmlFor="">{date}</label>
              </div>
            </Modal.Header>
            <Modal.Body>
              <LicenciaSin />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose4}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show5} onHide={handleClose5}>
            <Modal.Header>
              <Modal.Title className="modalTittle">Tareo Histórico</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Calendario />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose5}>
                {' '}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
          <Modal show={show6} onHide={handleClose6}>
            <Modal.Header>
              <Modal.Title className="modalTittle">Vacaciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Vacaciones />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose6}>
                {' '}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
          <Modal show={show7} onHide={handleClose7}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Feriados Trabajados
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FeriadosTrabajados />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose7}>
                {' '}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
          <Modal show={show8} onHide={handleClose8}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Descansos Trabajados
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DescansosTrabajados />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose8}>
                {' '}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
          <Modal show={show9} onHide={handleClose9}>
            <Modal.Header>
              <Modal.Title className="modalTittle">Descanso Médico</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DescansoMedico />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose9}>
                {' '}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
          <Modal show={show10} onHide={handleClose10}>
            <Modal.Header>
              <Modal.Title className="modalTittle">
                Registro de Hora Extra
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <NewExtraTime />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose9}>
                {' '}
                Cerrar
              </Button>
            </Modal.Footer>
            <div id="date-popup" />
          </Modal>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { Table_Tareo }
