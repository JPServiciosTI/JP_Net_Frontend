import React from "react";
import "./calendario.css";

function Calendario() {
  const mesActual = new Intl.DateTimeFormat("es-Es", { month: "long" }).format(
    new Date()
  );
  const añoActual = new Date().getFullYear();

  return (
    <>
      <div class="calendar">
        <div class="calendar__opts">
          <select
            className="select"
            name="calendar__month"
            id="calendar__month"
          >
            <option selected>
              {mesActual[0].toUpperCase() + mesActual.substring(1)}
            </option>
          </select>

          <select className="select" name="calendar__year" id="calendar__year">
            <option selected>{añoActual}</option>
          </select>
        </div>

        <div class="calendar__body">
          <div class="calendar__days">
            <div>Do</div>
            <div>Lu</div>
            <div>Ma</div>
            <div>Mi</div>
            <div>Ju</div>
            <div>Vi</div>
            <div>Sa</div>
          </div>

          <div class="calendar__dates">
            <div class="calendar__date calendar__date--grey">
              <span>27</span>
            </div>
            <div class="calendar__date calendar__date--grey">
              <span>28</span>
            </div>
            <div class="calendar__date calendar__date--grey">
              <span>29</span>
            </div>
            <div class="calendar__date calendar__date--grey">
              <span>30</span>
            </div>
            <div class="calendar__date calendar__no">
              <span>1</span>
            </div>
            <div class="calendar__date calendar__no">
              <span>2</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>3</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>4</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>5</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>6</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>7</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>8</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>9</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>10</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>11</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>12</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>13</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>14</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>15</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>16</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>17</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>18</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>19</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>20</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>21</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>22</span>
            </div>
            <div class="calendar__date calendar__no">
              <span>23</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>24</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>25</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>26</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>27</span>
            </div>
            <div class="calendar__date calendar__no">
              <span>28</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>29</span>
            </div>
            <div class="calendar__date calendar__si">
              <span>30</span>
            </div>
            <div class="calendar__date calendar__no">
              <span>31</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Calendario };
