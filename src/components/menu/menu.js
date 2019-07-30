import ArrowDownIcon from '../icon-arrow'
import { MCollapseTransition } from '../collapse'

function renderItem (h, item) {
  if (item.type === 'line') return renderLine(h)

  if (item.type === 'group') {
    return (
      <li class="m-group">
        <div class="m-group--item">
          <span class="m-group--title">{item.label}</span>
        </div>
        <ul class="m-menu">
          {item.items.map(e => renderItem(h, e))}
        </ul>
      </li>
    )
  }

  if (item.type === 'submenu') {
    return (
      <li class="m-submenu">
        <div class="m-submenu--item" on-click={() => (item.open = !item.open) }>
          {item.icon ? <i class={[ 'm-submenu--icon', item.icon ]}></i> : null}
          <span class="m-submenu--title">{item.label}</span>
          <ArrowDownIcon class="m-submenu--arrow-down-icon" direction={ item.open ? 'top' : 'bottom' }/>
        </div>
        <MCollapseTransition appear={true}>
          <ul class="m-menu" v-show={item.open}>
            {item.items.map(e => renderItem(h, e))}
          </ul>
        </MCollapseTransition>
      </li>
    )
  }

  return (
    <li class="m-menu-item" title={item.title}>
      {renderLink(h, item, (
        [
          <i class={[ 'm-menu-item--icon', item.icon ]}></i>,
          <span class="m-menu-item--title">{item.label}</span>
        ]
      ))}
    </li>
  )
}

function renderLink (h, item, children) {
  if (item.link) {
    return <a class="m-menu-item--link" href={item.link} target={item.target}>{children}<i class="fa fa-external-link"></i></a>
  }

  return (
    <router-link to={item.path} class="m-menu-item--link">{children}</router-link>
  )
}

function renderLine (h) {
  return <li class="m-menu-line"></li>
}

export default {
  name: 'Menu',
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    }
  },

  render (h) {
    return (
      <ul class="m-menu">
        {this.menus.map(item => {
          return renderItem(h, item)
        })}
      </ul>
    )
  }
}
